export const getKeys = key => key.split('x').map(Number)
export const listToDict = list =>
  list.reduce(
    (acc, c) =>
      Object.assign(acc, {
        [`${c.x}x${c.y}`]: c.v,
      }),
    {}
  )

export const dictToList = dict =>
  Object.entries(dict).map(([key, v]) => {
    const [x, y] = getKeys(key)
    return {
      x,
      y,
      v,
    }
  })
