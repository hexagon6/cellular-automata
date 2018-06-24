import test from 'ava'
import { Store } from 'svelte/store.js'

import { timer } from '../modules'

test('timer', t => {
  t.is(typeof timer, 'function')
  const init = {
    stopped: false,
  }
  const store = new Store(init)
  const that = {
    store,
    fire: signal => ({ signal }),
  }
  t.deepEqual(store.get(), init)
  t.pass(timer(that, 'stopped', 'next'))
})
