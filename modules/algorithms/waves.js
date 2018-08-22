import { countCells, neighborIn } from '../'

const quiet = v => v === 0
const excited = v => v === 1
const falling = v => v === 2

export const waves = (x, y) => cells => {
  const { vneumann: neighborhood } = neighborIn(x, y)
  return Object.keys(cells)
    .map(k => {
      const n = countCells(k)(cells, excited, neighborhood)
      const state = cells[k]
      const newState = n > 0 || state > 0 ? (state + 1) % 3 : state
      return { [k]: newState }
    })
    .reduce((a, c) => Object.assign(a, c), {})
}

// TODO: change gol to waves implementation!
export const wavesHex = (x, y) => cells => {
  const { hex: neighborhood } = neighborIn(x, y)
  return Object.keys(cells)
    .map(k => {
      const n = countCells(k)(cells, excited, neighborhood)
      const state = cells[k]
      const newState = n > 0 || state > 0 ? (state + 1) % 3 : state
      return { [k]: newState }
    })
    .reduce((a, c) => Object.assign(a, c), {})
}
