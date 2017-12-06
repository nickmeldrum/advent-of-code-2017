import { sumAllDifferences, sumEvenlyDivisibleValues } from 'day2-corruption-checksum'

describe('day2 = corruption checksum', () => {
  describe('part 1 - sum all differences', () => {
    it('test data sum returns 18', done => {
      sumAllDifferences('day2-part1-test-input', answer => {
        expect(answer).toEqual(18)
        done()
      })
    })

    it('just output the puzzle answer and pass :)', done => {
      sumAllDifferences('day2-input', answer => {
        console.log('And the day 2 part 1 answer is:', answer)
        done()
      })
    })
  })

  describe('part 2 - sum evenly divisible values', () => {
    it('test data sum returns 9', done => {
      sumEvenlyDivisibleValues('day2-part2-test-input', answer => {
        expect(answer).toEqual(9)
        done()
      })
    })
  })
})
