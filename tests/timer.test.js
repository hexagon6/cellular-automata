import test from 'ava'
import { Store } from 'svelte/store.js'

import { timer } from '../modules'

test('timer', t => {
  t.is(typeof timer, 'function')
  const init = {
    stopped: false,
    fire: signal => ({
      signal,
    }),
  }
  const store = new Store(init)
  t.deepEqual(store.get(), init)
  t.pass(timer(store, 'stopped', 'next'))
})
