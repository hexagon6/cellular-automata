import test from 'ava'
import { naive, naiveNB, listToDict, dictToList } from '../modules/'

const cellZero = { x: 0, y: 0, v: 0 }
const cellOne = { x: 0, y: 0, v: 1 }

test('listToDict', t => {
  t.deepEqual(listToDict([cellZero]), { '0x0': 0 })
  t.deepEqual(listToDict([cellOne]), { '0x0': 1 })
  t.deepEqual(listToDict([{ x: 0, y: 1, v: 0 }]), { '0x1': 0 })
  t.deepEqual(listToDict([{ x: 1, y: 1, v: 1 }]), { '1x1': 1 })
  t.deepEqual(listToDict([cellZero, cellZero]), { '0x0': 0 })
  t.deepEqual(listToDict([cellZero, cellOne]), { '0x0': 1 })
  t.deepEqual(listToDict([cellOne, cellZero]), { '0x0': 0 })
  t.deepEqual(listToDict([cellOne, cellOne]), { '0x0': 1 })
})

test('dictToList', t => {
  t.deepEqual(dictToList({ '0x0': 0 }), [cellZero])
  t.deepEqual(dictToList({ '0x0': 0 }), [cellZero])
  t.deepEqual(dictToList({ '0x0': 1 }), [cellOne])
  t.deepEqual(dictToList({ '0x1': 0 }), [{ x: 0, y: 1, v: 0 }])
  t.deepEqual(dictToList({ '1x1': 1 }), [{ x: 1, y: 1, v: 1 }])
  t.deepEqual(dictToList({ '0x0': 0 }), [cellZero])
  t.deepEqual(dictToList({ '0x0': 1 }), [cellOne])
})
