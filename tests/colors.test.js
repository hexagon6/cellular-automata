import test from 'ava'
import { genHSLAColor } from '../modules'

test('hsla generation', t => {
  t.is(genHSLAColor(0, 0, 0, 0), 'hsla(0,0%,0%,0%)')
  t.is(genHSLAColor(255, 100, 100, 100), 'hsla(255,100%,100%,100%)')
})
