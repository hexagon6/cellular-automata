import test from 'ava'
import { naive, countCells } from '../src/lib/modules/index.js'
import { gol, golHex } from '../src/lib/modules/algorithms/gameoflife.js'
import { waves, wavesHex } from '../src/lib/modules/algorithms/waves.js'

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

test('Naive algorithm', (t) => {
  t.deepEqual(naive([cellZero], 2), [cellOne])
  t.deepEqual(naive([cellOne], 2), [cellZero])
})

test('Game of Life', (t) => {
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

test('hexagonal Game of Life', (t) => {
  const cellsBefore = {
    '0x0': 0,
    '0x1': 1,
    '0x2': 1,
    '1x0': 0,
    '1x1': 0,
    '1x2': 0,
    '2x0': 0,
    '2x1': 0,
    '2x2': 0,
  }
  const cellsAfter = {
    '0x0': 0,
    '0x1': 0,
    '0x2': 0,
    '1x0': 0,
    '1x1': 0,
    '1x2': 0,
    '2x0': 0,
    '2x1': 0,
    '2x2': 0,
  }
  t.deepEqual(golHex(6, 6)(cellsBefore), cellsAfter)
})

test.todo('calculate new state based on neighbors')
test('Waves', (t) => {
  const cellsBefore = {
    '0x0': 0,
    '0x1': 0,
    '0x2': 0,
    '1x0': 0,
    '1x1': 1,
    '1x2': 0,
    '2x0': 0,
    '2x1': 0,
    '2x2': 0,
  }
  const cellsAfter = {
    '0x0': 0,
    '0x1': 1,
    '0x2': 0,
    '1x0': 1,
    '1x1': 2,
    '1x2': 1,
    '2x0': 0,
    '2x1': 1,
    '2x2': 0,
  }
  t.deepEqual(waves(3, 3)(cellsBefore), cellsAfter)
})

test('Waves 2', (t) => {
  const cellsBefore = {
    '0x0': 0,
    '0x1': 0,
    '0x2': 0,
    '1x0': 0,
    '1x1': 11,
    '1x2': 0,
    '2x0': 0,
    '2x1': 0,
    '2x2': 0,
  }
  const cellsAfter = {
    '0x0': 0,
    '0x1': 0,
    '0x2': 0,
    '1x0': 0,
    '1x1': 0,
    '1x2': 0,
    '2x0': 0,
    '2x1': 0,
    '2x2': 0,
  }
  t.deepEqual(waves(3, 3)(cellsBefore), cellsAfter)
})

test('Waves hex', (t) => {
  const cellsBefore = {
    '0x0': 0,
    '0x1': 0,
    '0x2': 0,
    '1x0': 0,
    '1x1': 1,
    '1x2': 0,
    '2x0': 0,
    '2x1': 0,
    '2x2': 0,
  }
  const cellsAfter = {
    '0x0': 1,
    '0x1': 1,
    '0x2': 0,
    '1x0': 1,
    '1x1': 2,
    '1x2': 1,
    '2x0': 1,
    '2x1': 1,
    '2x2': 0,
  }
  t.deepEqual(wavesHex(3, 3)(cellsBefore), cellsAfter)
})

test('Waves hex 2', (t) => {
  const cellsBefore = {
    '1x0': 0,
    '1x1': 0,
    '1x2': 0,
    '2x0': 0,
    '2x1': 1,
    '2x2': 0,
    '3x0': 0,
    '3x1': 0,
    '3x2': 0,
  }
  const cellsAfter = {
    '1x0': 0,
    '1x1': 1,
    '1x2': 1,
    '2x0': 1,
    '2x1': 2,
    '2x2': 1,
    '3x0': 0,
    '3x1': 0,
    '3x2': 0,
  }
  t.deepEqual(wavesHex(3, 3)(cellsBefore), cellsAfter)
})
