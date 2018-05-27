import { getKeys } from '../utils'

// define grid size, so border wrapped neighbors can be calculated
export const neighborIn = (X_, Y_) => {
  if (X_ === 0 || Y_ === 0) {
    throw Error('choose 1 instead of 0')
  }
  const left = n => (n - 1 + X_) % X_
  const right = n => (n + 1) % X_
  const up = n => (n - 1 + Y_) % Y_
  const down = n => (n + 1) % Y_

  const lr_ud = ([X, Y], [x, y]) => {
    const lr = right(X) === x || left(X) === x
    const ud = down(Y) === y || up(Y) === y
    return [lr, ud]
  }

  const vneumann = (x, y) => k => {
    const [X, Y] = getKeys(k)
    const [lr, ud] = lr_ud([X, Y], [x, y])
    return (X === x && ud) || (Y === y && lr)
  }

  const moore = (x, y) => k => {
    const [X, Y] = getKeys(k)
    const [lr, ud] = lr_ud([X, Y], [x, y])
    return (lr && ud) || vneumann(x, y)(k)
  }

  const hex = (x, y) => k => {
    const [X, Y] = getKeys(k)
    const lr = right(X) === x || left(X) === x
    const [u, d] = [up(Y) === y, down(Y) === y]
    const common = vneumann(x, y)(k)
    const vd = (x % 2 === 0 ? u : d) && lr
    return vd || common
  }

  return {
    hex,
    moore,
    vneumann,
    left,
    right,
    up,
    down,
  }
}
