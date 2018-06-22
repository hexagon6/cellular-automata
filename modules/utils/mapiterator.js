export function* increase(max = Infinity, init = 0) {
  var index = init
  while (true) {
    yield index++ % max
  }
}

export const mapIterator = (map, index = 0) => {
  const iterator = increase(map.length, index)
  return {
    next: () => map[iterator.next().value]
  }
}
