import hexagonal from './shapes/hexagon'
import rectangular from './shapes/rectangular'

import GameofLifeDefault from './stores/gameoflife'
import WavesDefault from './stores/waves'

const algorithm = () => 0
const naive = (field, states) =>
  field.map(cell =>
    Object.assign({}, cell, {
      v: (cell.v + 1) % states,
    })
  )

const naiveNB = (field, states, neighborhood) => {
  return field
}

const fieldGen = type => {
  const _default = 'rectangular'
  const generators = {
    hexagonal: hexagonal.field,
    rectangular: rectangular.field,
  }
  return type in generators ? generators[type] : generators[_default]
}

const listToDict = list =>
  list.reduce(
    (acc, c) =>
      Object.assign(acc, {
        [`${c.x}x${c.y}`]: c.v,
      }),
    {}
  )

const dictToList = dict =>
  Object.entries(dict).map(([key, v]) => {
    const [x, y] = getKeys(key)
    return {
      x,
      y,
      v,
    }
  })

const getKeys = key => key.split('x').map(Number)

const neighborIn = (X_, Y_) => {
  if (X_ === 0 || Y_ === 0) {
    throw 'choose 1 instead of 0'
  }
  const left = n => (n - 1 + X_) % X_
  const right = n => (n + 1) % X_
  const up = n => (n - 1 + Y_) % Y_
  const down = n => (n + 1) % Y_

  const moore = (X, Y) => k => {
    const [x, y] = getKeys(k)
    if (typeof X_ === undefined) {
      X_ = Infinity
    }
    if (typeof Y_ === undefined) {
      Y_ = Infinity
    }
    const r = right(X) === x
    const l = left(X) === x
    const d = down(Y) === y
    const u = up(Y) === y
    const lr = l || r
    const ud = u || d
    const res = (lr && ud) || (X === x && ud) || (Y === y && lr)
    return res
  }

  return {
    moore,
    left,
    right,
    up,
    down,
  }
}

const countCells = cellKey => (cells, condition, neighborhood) => {
  const [X, Y] = getKeys(cellKey)
  const NB = neighborhood ? neighborhood(X, Y) : false
  return Object.entries(cells)
    .filter(
      ([k, v]) =>
        (k !== cellKey && // not cell itself
          !NB) ||
        (NB(k) && // if neighborhood is undefined, include all other cells
          condition(v))
    )
    .reduce((a, c) => a + 1, 0)
}

const initializer = (n, i) => n % i
const randomInitializer = (n, i) => Math.floor(Math.random() * n) % i

export {
  algorithm,
  hexagonal,
  rectangular,
  GameofLifeDefault,
  WavesDefault,
  fieldGen,
  initializer,
  randomInitializer,
  naive,
  naiveNB,
  listToDict,
  dictToList,
  countCells,
  neighborIn,
}
