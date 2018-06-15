import { waves, wavesHex } from '../algorithms/waves'

const fieldtypes = ['hexagonal', 'rectangular']
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
  fieldtype: fieldtypes[1],
  fieldtypes,
  statecolors: stati[0],
  stati: stati,
}
