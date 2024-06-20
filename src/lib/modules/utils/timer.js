import { get } from 'svelte/store'

export const timer = function (t, key, signal) {
  if (t.store) {
    const store = get(t.store)
    if (key in store && !store[key]) t.fire(signal)
  }
}
