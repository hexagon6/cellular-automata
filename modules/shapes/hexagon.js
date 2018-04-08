const bigHexagonPoints = '300,130 225,260 75,260 0,130 75,0 225,0'
const hexagonPoints = '60,26 45,52 15,52 0,26 15,0 45,0'

const field = (X, Y, state, f) => {
  return Array.from({ length: X * Y }).map((_, i) => {
    const y = Math.floor(i / X)
    const v = f(i, state)
    const x = i % X
    return (y % 2 === 0)
      ?
        ({
          x: x * 2 + 1,
          y: y,
          v,
        })
      :
        ({
          x: x * 2,
          y: y,
          v,
        })
  })
}

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
