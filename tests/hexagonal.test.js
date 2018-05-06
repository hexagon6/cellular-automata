import test from 'ava'
import { hexagonal } from '../modules'

const {
  serialize,
  deserialize,
  scale,
  hexagonPoints,
  bigHexagonPoints,
  field,
} = hexagonal
const deserializedHexagonPoints = [
  [60, 26],
  [45, 52],
  [15, 52],
  [0, 26],
  [15, 0],
  [45, 0],
]

test('deserialize', t => {
  t.deepEqual(deserialize(hexagonPoints), deserializedHexagonPoints)
})

test('serialize', t => {
  t.deepEqual(serialize(deserializedHexagonPoints), hexagonPoints)
})

test('serialize & deserialize', t => {
  t.deepEqual(serialize(deserialize(hexagonPoints)), hexagonPoints)
})

test('generate points for a hexagon', t => {
  t.is(scale(), hexagonPoints)
})

test('generate points for a hexagon, with scale factor 1', t => {
  t.is(scale(1), hexagonPoints)
})

test('generate points for a hexagon, with scale factor 5', t => {
  t.is(scale(5), bigHexagonPoints)
})

test('field generator', t => {
  const f = field(2, 2, 2, (i, n) => i % n)
  t.deepEqual(f[0], {
    v: 0,
    x: 0,
    y: 0,
  })
  t.deepEqual(f[1], {
    v: 1,
    x: 1,
    y: 0,
  })
  t.deepEqual(f[2], {
    v: 0,
    x: 0,
    y: 1,
  })
  t.deepEqual(f[3], {
    v: 1,
    x: 1,
    y: 1,
  })
})
