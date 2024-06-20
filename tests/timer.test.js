import test from 'ava'
import { get, writable } from 'svelte/store'

import { timer } from '../src/lib/modules/index.js'

test('timer', (t) => {
  t.is(typeof timer, 'function')
  const init = {
    stopped: writable(false),
  }
  const store = writable(init)
  const that = {
    store,
    fire: (signal) => ({ signal }),
  }
  t.deepEqual(get(store), init)
  t.pass(timer(that, 'stopped', 'next'))
})
