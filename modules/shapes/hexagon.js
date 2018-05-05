const bigHexagonPoints = '300,130 225,260 75,260 0,130 75,0 225,0'
const hexagonPoints = '60,26 45,52 15,52 0,26 15,0 45,0'

const _increasingValues = length => Array.from({ length }).map((v, i) => i)
const _toCell = (X, Y, state, f) => i => ({ x: i % X, y: Math.floor(i / Y), v: f(i, state) })
const field = (X, Y, state, f) => _increasingValues(X * Y).map(_toCell(X, Y, state, f))

const scale = (factor = 1) =>
  serialize( 
    deserialize(hexagonPoints)
      .map(pair => pair
        .map(c => factor * c))
  )

const serialize = input => input.map(s => s.join(',')).join(' ')

const deserialize = input =>
  input.split(' ').map(a => a.split(',').map(Number))

export default {
  field, scale, serialize, deserialize, hexagonPoints, bigHexagonPoints
}
