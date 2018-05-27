const fieldtypes = ['hexagonal', 'rectangular']
const stati = [
  ['#ff6738', '#18c8ff', '#efaf03', '#60f370'],
  ['#ffffff', '#efefef'],
]

export default {
  name: 'Waves',
  algorithm: {
    name: 'Waves',
    run: () => { },
  },
  field: [],
  fieldtype: fieldtypes[0],
  fieldtypes,
  statecolors: stati[0],
  stati: stati,
};
