export const sumMatchingNextDigit = input => input.split('').reduce((sum, current, index, original) => {
  const next = index + 1 === original.length ? original[0] : original[index + 1]
  return (current === next) ? sum = sum + parseInt(current, 10) : sum
}, 0)

export const sumMatchingDigitHalfWayAround = input => input
