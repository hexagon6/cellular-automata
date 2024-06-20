import { gol, golHex } from '../algorithms/gameoflife.js'
import { mapIterator } from '../utils/mapiterator.js'

const fieldtypes = () =>
  mapIterator(
    [
      {
        fieldtype: 'rectangular',
      },
      {
        fieldtype: 'hexagonal',
      },
    ],
    0
  )

const stati = [
  ['#ffffff', '#efefef'],
  ['#ff6738', '#18c8ff', '#efaf03', '#60f370'],
]

export default {
  name: 'Game of Life',
  algorithm: {
    name: 'GoL',
    run: {
      rectangular: gol,
      hexagonal: golHex,
    },
  },
  field: [],
  fieldtypes,
  statecolors: stati[0],
  stati: stati,
}
