const sum = input => ({
  matching: matcher => input.split('').reduce((sum, current, index, original) =>
    (current === matcher(original, index)) ? sum = sum + parseInt(current, 10) : sum, 0)
})

export const sumMatchingNextDigit = input => sum(input).matching((original, index) =>
  index + 1 === original.length ? original[0] : original[index + 1]
)

export const sumMatchingDigitHalfWayAround = input => sum(input).matching((original, index) =>
  original[(original.length / 2 + index) % original.length]
)
