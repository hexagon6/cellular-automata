export const timer = function (t, key, signal) {
  if (t.store) {
    if (!t.store.get()[key]) {
      t.fire(signal)
    }
  }
}
