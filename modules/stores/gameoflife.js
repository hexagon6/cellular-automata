const fieldtypes = ['hexagonal', 'rectangular']
const stati = [
  ['#ff6738', '#18c8ff', '#efaf03', '#60f370'],
  ['#ffffff', '#efefef'],
]

export default {
  name: 'Game of Life',
  algorithm: {
    name: 'GoL',
  },
  field: [],
  fieldtype: fieldtypes[1],
  fieldtypes,
  statecolors: stati[1],
  stati: stati,
};
