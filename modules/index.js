const field = (x, y, s, f) => Array.from({ length: x * y }).map((v, i) => ({
  x: (i % y),
  y: Math.floor(i / x),
  v: f(i, s),
}))

export {
  field,
}
