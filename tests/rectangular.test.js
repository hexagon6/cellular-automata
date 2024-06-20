import test from 'ava'
import { rectangular } from '../src/lib/modules/index.js'

test('field generator', (t) => {
  const f = rectangular.field(2, 2, 2, (i, n) => i % n)
  t.deepEqual(f[0], {
    v: 0,
    x: 0,
    y: 0,
  })
  t.deepEqual(f[1], {
    v: 1,
    x: 1,
    y: 0,
  })
  t.deepEqual(f[2], {
    v: 0,
    x: 0,
    y: 1,
  })
  t.deepEqual(f[3], {
    v: 1,
    x: 1,
    y: 1,
  })
})
