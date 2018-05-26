import test from 'ava'
import { naive, naiveNB, countCells, neighborIn, gol } from '../modules/'

const cellZero = { x: 0, y: 0, v: 0 }
const cellOne = { x: 0, y: 0, v: 1 }

const before = [
  cellZero,
  {
    x: 1,
    y: 0,
    v: 1,
  },
]

const after = [
  {
    x: 0,
    y: 0,
    v: 1,
  },
  {
    x: 1,
    y: 0,
    v: 0,
  },
]

test('Naive algorithm', t => {
  t.deepEqual(naive([cellZero], 2), [cellOne])
  t.deepEqual(naive([cellOne], 2), [cellZero])
})

test('Game of Life', t => {
  const cellsBefore = {
    '0x0': 0,
    '0x1': 1,
    '0x2': 0,
    '1x0': 0,
    '1x1': 1,
    '1x2': 0,
    '2x0': 0,
    '2x1': 1,
    '2x2': 0,
  }
  const cellsAfter = {
    '0x0': 0,
    '0x1': 0,
    '0x2': 0,
    '1x0': 1,
    '1x1': 1,
    '1x2': 1,
    '2x0': 0,
    '2x1': 0,
    '2x2': 0,
  }
  t.deepEqual(gol(6, 6)(cellsBefore), cellsAfter)
  t.deepEqual(gol(6, 6)(cellsAfter), cellsBefore)
})

test.todo('calculate new state based on neighbors')
test.todo('Waves')
