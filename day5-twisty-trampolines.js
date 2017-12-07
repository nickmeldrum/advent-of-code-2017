const numberOfStepsToEscapeBasedOnOffsetModifier = offsetModifierFunc => offsets => {
  let position = 0
  let numberOfSteps = 0
  while (position >= 0 && position < offsets.length) {
    let currentOffset = offsets[position]
    offsets[position] = offsetModifierFunc(offsets[position])
    position += currentOffset
    ++numberOfSteps
  }
  return numberOfSteps
}

const increaseBy1 = offset => offset + 1
const over3ThenDecreaseBy1OtherwiseIncreaseBy1 = offset => offset >= 3 ? offset - 1 : offset + 1

export const numberOfStepsToEscape = numberOfStepsToEscapeBasedOnOffsetModifier(increaseBy1)
export const numberOfStepsToEscapeStrangerOffsets = numberOfStepsToEscapeBasedOnOffsetModifier(over3ThenDecreaseBy1OtherwiseIncreaseBy1)
