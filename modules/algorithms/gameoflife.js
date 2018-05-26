import { countCells, neighborIn } from '../'

const alive = v => v === 1

export const gol = (x, y) => cells => {
  const { vneumann, moore } = neighborIn(x, y)
  return Object.keys(cells)
    .map(k => {
      const n = countCells(k)(cells, alive, moore)
      return { [k]: n === 2 ? cells[k] : n > 2 && n < 4 ? 1 : 0 }
    })
    .reduce((a, c) => Object.assign(a, c), {})
}
