import { get, writable } from 'svelte/store'

export const timer = function (t, key, signal) {
  if (t?.store) {
    const store = get(t.store)
    if (key in store && !get(store[key])) t.fire(signal)
  }
}

export const stopped = writable(false)
