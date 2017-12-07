export const numberOfStepsToEscape = offsets => {
  let position = 0
  let numberOfSteps = 0
  while (position >= 0 && position < offsets.length) {
    let currentOffset = offsets[position]
    offsets[position] += 1
    position += currentOffset
    ++numberOfSteps
  }
  return numberOfSteps
}
