import test from 'ava'
import { algorithm } from '../modules/'

test('Naive algorithm', t => {
  t.is(algorithm(), 0)
})

test.todo('get neighbors')
test.todo('calculate new state based on neighbors')
test.todo('Game of Life')
test.todo('Waves')
