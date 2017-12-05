export const sumMatchingDigits = input => {
  let sum = 0
  for(let position = 0; position < input.length; position++) {
    const current = input[position]
    const next = position + 1 === input.length ? input[0] : input[position + 1]
    if (current === next) sum = sum + parseInt(current, 10)
  }
  return sum
}
