import { waves, wavesHex } from '../algorithms/waves'
import { mapIterator } from '../utils/mapiterator'

const fieldtypes = mapIterator(
  [
    {
      fieldtype: 'rectangular',
    },
    {
      fieldtype: 'hexagonal',
    },
  ],
  1
)

const stati = [
  ['#ffffff', '#dfdfdf', '#efefef'],
  ['#ff6738', '#18c8ff', '#efaf03', '#60f370'],
]

export default {
  name: 'Waves',
  algorithm: {
    name: 'Waves',
    run: {
      rectangular: waves,
      hexagonal: wavesHex,
    },
  },
  field: [],
  fieldtypes,
  statecolors: stati[0],
  stati: stati,
}
