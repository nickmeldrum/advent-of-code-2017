export const sumMatchingDigits = input => {
  let sum = 0
  for(let position = 0; position < input.length; position++) {
    const current = input[position]
    const next = input[position + 1]
    if (current === next) sum = sum + parseInt(current, 10)
  }
  return sum
}
