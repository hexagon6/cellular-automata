import { gol, golHex } from '../algorithms/gameoflife'

const fieldtypes = ['hexagonal', 'rectangular']
const stati = [
  ['#ff6738', '#18c8ff', '#efaf03', '#60f370'],
  ['#ffffff', '#efefef'],
]

export default {
  name: 'Game of Life',
  algorithm: {
    name: 'GoL',
    run: {
      rectangular: gol,
      hexagonal: golHex,
    }
  },
  field: [],
  fieldtype: fieldtypes[1],
  fieldtypes,
  statecolors: stati[1],
  stati: stati,
};
