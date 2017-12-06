import { manhattanDistance } from 'day3-spiral-memory'
import { test } from 'test-creator'

describe('day3 - spiral memory', () => {
  describe('part 1 - manhattan distance', () => {
    test(manhattanDistance).withData([
      {input:1, expected: 0},
      {input:12, expected: 3},
    ])
  })
})
