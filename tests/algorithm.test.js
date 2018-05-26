import test from 'ava'
import {
  naive,
  naiveNB,
} from '../modules/'

const cellZero = { x: 0, y: 0, v: 0 }
const cellOne = { x: 0, y: 0, v: 1 }

const before = [
  cellZero,
  {
    x: 1,
    y: 0,
    v: 1,
  }
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
  }
]

test('Naive algorithm', t => {
  t.deepEqual(naive([cellZero], 2), [cellOne])
  t.deepEqual(naive([cellOne], 2), [cellZero])
})


test.todo('calculate new state based on neighbors')
test.todo('Game of Life')
test.todo('Waves')
