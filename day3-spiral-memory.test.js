import { manhattanDistance } from 'day3-spiral-memory'
import { test } from 'test-creator'

describe('day3 - spiral memory', () => {
  describe('part 1 - manhattan distance', () => {
    test(manhattanDistance).withData([
      {input: 1, expected: 0},
      {input: 2, expected: 1},
      {input: 3, expected: 2},
      {input: 12, expected: 3},
      {input: 23, expected: 2},
      {input: 1024, expected: 31},
    ])

    it('just output the puzzle answer and pass :)', () => {
      // console.log('And the day 3 part 1 answer is:', manhattanDistance(289326))
    })
  })
})
