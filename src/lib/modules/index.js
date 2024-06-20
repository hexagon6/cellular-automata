import hexagonal from './shapes/hexagon.js'
import rectangular from './shapes/rectangular.js'

import GameofLifeDefault from './stores/gameoflife.js'
import WavesDefault from './stores/waves.js'

import { getKeys, listToDict, dictToList } from './field/utils.js'
import { neighborIn } from './field/rectangular/neighborhood.js'

import { genHSLAColor } from './colors/hsla.js'

import { increase, mapIterator } from './utils/mapiterator.js'
import { timer } from './utils/timer.js'

const algorithm = () => 0
const naive = (field, states) =>
  field.map((cell) =>
    Object.assign({}, cell, {
      v: (cell.v + 1) % states,
    })
  )

const fieldGen = (type) => {
  const _default = 'rectangular'
  const generators = {
    hexagonal: hexagonal.field,
    rectangular: rectangular.field,
  }
  return type in generators ? generators[type] : generators[_default]
}

const countCells = (cellKey) => (cells, condition, neighborhood) => {
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
  increase,
  mapIterator,
  timer,
  rectangular,
  GameofLifeDefault,
  WavesDefault,
  fieldGen,
  initializer,
  randomInitializer,
  naive,
  listToDict,
  dictToList,
  countCells,
  neighborIn,
  genHSLAColor,
}
