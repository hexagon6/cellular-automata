export const genHSLAColor = (hue, sat, lig, alpha = '100') =>
  `hsla(${hue},${sat}%,${lig}%,${alpha}%)`
