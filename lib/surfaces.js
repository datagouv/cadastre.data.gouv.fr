function contenanceToSurface(contenance) {
  let unit = ''
  let surface = 0
  const contenanceLength = (contenance.toString().length)

  if (isNaN(contenance) || contenance < 0) {
    unit = ''
    surface = ''
  } else if (contenanceLength < 3) {
    unit = ' m²'
    surface = contenance
  } else if (contenanceLength >= 3 && contenanceLength < 5) {
    unit = ' a'
    surface = (contenance / 100).toFixed(2)
    surface = surface.replace('.', ',')
  } else {
    unit = ' ha'
    surface = (contenance / 10000).toFixed(2)
    surface = surface.replace('.', ',')
  }

  return `${surface}${unit}`
}

module.exports = {contenanceToSurface}
