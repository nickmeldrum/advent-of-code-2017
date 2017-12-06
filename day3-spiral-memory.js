const direction = ['right', 'up', 'left', 'down']

export const manhattanDistance = location => {
  let current = 0
  let jumpInterval = 1
  let switcher = true
  let cornerIndex = 2
  const changeDirectionIndices = []
  let x = 1
  let y = 0

  if (location === 1) return 0

  for (let i = 2; i < location; i++) {
    switcher = !switcher
    if (switcher) jumpInterval++
    changeDirectionIndices.push(cornerIndex)
    cornerIndex = cornerIndex + jumpInterval
    if (changeDirectionIndices.includes(i)) {
      if (current === 3) current = 0
      else current = current + 1
    }
    if (direction[current] === 'right') ++x
    if (direction[current] === 'up') ++y
    if (direction[current] === 'left') --x
    if (direction[current] === 'down') --y
  }
  return Math.abs(x) + Math.abs(y)
}

export const accumulatedValues = location => {
  let current = 0
  let jumpInterval = 1
  let switcher = true
  let cornerIndex = 2
  const changeDirectionIndices = []
  let x = 1
  let y = 0
  const values = []

  const sumAdjacent = (x, y) => {
    let sum = 0
    if (values[x] !== undefined) {
      sum = sum + (values[x][y - 1] === undefined ? 0 : values[x][y - 1])
      sum = sum + (values[x][y + 1] === undefined ? 0 : values[x][y + 1])
    }
    if (values[x - 1] !== undefined) {
      sum = sum + (values[x - 1][y - 1] === undefined ? 0 : values[x - 1][y - 1])
      sum = sum + (values[x - 1][y] === undefined ? 0 : values[x - 1][y])
      sum = sum + (values[x - 1][y + 1] === undefined ? 0 : values[x - 1][y + 1])
    }
    if (values[x + 1] !== undefined) {
      sum = sum + (values[x + 1][y - 1] === undefined ? 0 : values[x + 1][y - 1])
      sum = sum + (values[x + 1][y] === undefined ? 0 : values[x + 1][y])
      sum = sum + (values[x + 1][y + 1] === undefined ? 0 : values[x + 1][y + 1])
    }
    console.log('summing for', x, y, sum)
    return sum
  }

  if (location === 1) return 0

  values[1] = []
  values[1][0] = 1

  for (let i = 2; i < location; i++) {
    switcher = !switcher
    if (switcher) jumpInterval++
    changeDirectionIndices.push(cornerIndex)
    cornerIndex = cornerIndex + jumpInterval
    if (changeDirectionIndices.includes(i)) {
      if (current === 3) current = 0
      else current = current + 1
    }
    if (direction[current] === 'right') ++x
    if (direction[current] === 'up') ++y
    if (direction[current] === 'left') --x
    if (direction[current] === 'down') --y
    if (values[x] === undefined) values[x] = []
    const sum = sumAdjacent(x, y)
    values[x][y] = sum
    console.log(i, values)
  }
  return Math.abs(x) + Math.abs(y)
}
