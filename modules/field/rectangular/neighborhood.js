import { getKeys } from '../utils'

// define grid size, so border wrapped neighbors can be calculated
export const neighborIn = (X_, Y_) => {
  if (X_ === 0 || Y_ === 0) {
    throw 'choose 1 instead of 0'
  }
  const left = n => (n - 1 + X_) % X_
  const right = n => (n + 1) % X_
  const up = n => (n - 1 + Y_) % Y_
  const down = n => (n + 1) % Y_

  const moore = (X, Y) => k => {
    const [x, y] = getKeys(k)
    const r = right(X) === x
    const l = left(X) === x
    const d = down(Y) === y
    const u = up(Y) === y
    const lr = l || r
    const ud = u || d
    const res = (lr && ud) || (X === x && ud) || (Y === y && lr)
    return res
  }

  const vneumann = (X, Y) => k => {
    const [x, y] = getKeys(k)
    const r = right(X) === x
    const l = left(X) === x
    const d = down(Y) === y
    const u = up(Y) === y
    const lr = l || r
    const ud = u || d
    return (X === x && ud) || (Y === y && lr)
  }

  return {
    moore,
    vneumann,
    left,
    right,
    up,
    down,
  }
}
