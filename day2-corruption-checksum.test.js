import { sumAllDifferences } from 'day2-corruption-checksum'

describe('day2 = corruption checksum', () => {
  it('part 1 - sum all differences', done => {
    sumAllDifferences('day2-test-input', answer => {
      expect(answer).toEqual(18)
      done()
    })
  })
})
