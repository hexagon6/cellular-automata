export const timer = function(t, key, signal) {
  if (t.store) {
    const store = t.store.get()
    if (key in store && !store[key]) t.fire(signal)
  }
}
