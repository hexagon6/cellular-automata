import hexagonal from './shapes/hexagon'
import rectangular from './shapes/rectangular'

import { GameofLifeDefault, WavesDefault } from './stores'

const algorithm = () => 0

const fieldGen = type => {
  const _default = 'rectangular'
  const generators = {
    hexagonal: hexagonal.field,
    rectangular: rectangular.field,
  }
  return type in generators ? generators[type] : generators[_default]
}

const initializer = (n, i) => n % i
const randomInitializer = (n, i) => Math.floor(Math.random() * n) % i

export {
  algorithm,
  hexagonal,
  rectangular,
  GameofLifeDefault,
  WavesDefault,
  fieldGen,
  initializer,
  randomInitializer,
}
