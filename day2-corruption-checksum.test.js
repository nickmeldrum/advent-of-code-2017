import { sumAllDifferences } from 'day2-corruption-checksum'

describe('day2 = corruption checksum', () => {
  it('part 1 - sum all differences', done => {
    sumAllDifferences('day2-test-input', answer => {
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
