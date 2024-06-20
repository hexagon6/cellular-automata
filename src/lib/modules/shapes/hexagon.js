const bigHexagonPoints = '300,150 225,280 75,280 0,150 75,20 225,20'
const hexagonPoints =
  '100,50 75,93.33333333333334 25,93.33333333333334 0,50 25,6.666666666666667 75,6.666666666666667'

// https://jsfiddle.net/32T2a/654/ -> polygon of hexagon
const _increasingValues = length => Array.from({ length }).map((v, i) => i)
const _toCell = (X, Y, state, f) => i => ({
  x: i % X,
  y: Math.floor(i / Y),
  v: f(i, state),
})
const field = (X, Y, state, f) =>
  _increasingValues(X * Y).map(_toCell(X, Y, state, f))

const scale = (factor = 1) =>
  serialize(deserialize(hexagonPoints).map(pair => pair.map(c => factor * c)))

const serialize = input => input.map(s => s.join(',')).join(' ')

const deserialize = input => input.split(' ').map(a => a.split(',').map(Number))

export default {
  field,
  scale,
  serialize,
  deserialize,
  hexagonPoints,
  bigHexagonPoints,
}
