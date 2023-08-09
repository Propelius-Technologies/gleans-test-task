const hexToHSL = (H: string): [h: number, s: number, l: number] => {
  let r = 0,
    g = 0,
    b = 0

  if (H.length === 4) {
    r = parseInt(H[1] + H[1], 16)
    g = parseInt(H[2] + H[2], 16)
    b = parseInt(H[3] + H[3], 16)
  } else if (H.length === 7) {
    r = parseInt(H[1] + H[2], 16)
    g = parseInt(H[3] + H[4], 16)
    b = parseInt(H[5] + H[6], 16)
  }

  r /= 255
  g /= 255
  b /= 255

  let cmin = Math.min(r, g, b),
    cmax = Math.max(r, g, b),
    delta = cmax - cmin,
    h = 0,
    s = 0,
    l = 0

  if (delta === 0) h = 0
  else if (cmax === r) h = ((g - b) / delta) % 6
  else if (cmax === g) h = (b - r) / delta + 2
  else h = (r - g) / delta + 4

  h = Math.round(h * 60)

  if (h < 0) h += 360

  l = (cmax + cmin) / 2
  s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1))
  s = +(s * 100).toFixed(1)
  l = +(l * 100).toFixed(1)

  return [h, s, l]
}

export const getGradientColors = (hex: string): [string, string] => {
  let [h, s, l] = hexToHSL(hex)

  l = +l.toFixed(0)

  const pastelColor = `hsl(${h * 0.8}, ${s * 1.3}%, ${50}%)`
  const saturatedColor = `hsl(${h}, ${s * 0.4}%, ${l * 0.9}%)`

  return [pastelColor, saturatedColor]
}
