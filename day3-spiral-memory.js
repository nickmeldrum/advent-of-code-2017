const direction = ['right', 'up', 'left', 'down']

export const manhattanDistance = location => {
  let current = 0
  let jumpInterval = 1
  let switcher = true
  let cornerIndex = 2
  const changeDirectionIndices = []
  const position = { x: 1, y: 0 }

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
    if (direction[current] === 'right') position.x = position.x + 1
    if (direction[current] === 'up') position.y = position.y + 1
    if (direction[current] === 'left') position.x = position.x - 1
    if (direction[current] === 'down') position.y = position.y - 1
  }
  return Math.abs(position.x) + Math.abs(position.y)
}
