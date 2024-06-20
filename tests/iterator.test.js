import test from 'ava'

import { increase, mapIterator } from '../src/lib/modules/index.js'

test('iterator 0', (t) => {
  const iterator = increase()
  t.is(typeof iterator, 'object')
  t.is(iterator.next().value, 0)
  t.is(iterator.next().value, 1)
  t.is(iterator.next().value, 2)
  t.is(iterator.next().value, 3)
})

test('iterator 1', (t) => {
  const iterator = increase(2)
  t.is(typeof iterator, 'object')
  t.is(iterator.next().value, 0)
  t.is(iterator.next().value, 1)
  t.is(iterator.next().value, 0)
  t.is(iterator.next().value, 1)
})

test('iterator 2', (t) => {
  const iterator = increase(2, 1)
  t.is(typeof iterator, 'object')
  t.is(iterator.next().value, 1)
  t.is(iterator.next().value, 0)
  t.is(iterator.next().value, 1)
  t.is(iterator.next().value, 0)
})

test('mapiterator', (t) => {
  const iterator = mapIterator(['a', 'b'], 1)
  t.is(typeof iterator, 'object')
  t.is(iterator.next(), 'b')
  t.is(iterator.next(), 'a')
  t.not(iterator.next(), 'a')
  t.is(iterator.next(), 'a')
})
