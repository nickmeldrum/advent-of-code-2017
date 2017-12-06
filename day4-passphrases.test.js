import { isValid, numberOfValidPassphrases } from 'day4-passphrases'
import { test } from 'test-creator'

describe('day4 - high-entropy passphrases', () => {
  describe('part 1 - validate passphrases', () => {
    test(isValid).withData([
      {input: ['aa', 'bb', 'cc', 'dd', 'ee'], expected: true},
      {input: ['aa', 'bb', 'cc', 'dd', 'aa'], expected: false},
      {input: ['aa', 'bb', 'cc', 'dd', 'aaa'], expected: true},
    ])

    it('part 1 - validate passphrases from file', done => {
      numberOfValidPassphrases('day4-test-input', answer => {
        expect(answer).toEqual(2)
        done()
      })
    })

    it('just output the puzzle answer and pass :)', done => {
      numberOfValidPassphrases('day4-input', answer => {
        console.log('And the day 4 part 1 answer is:', answer)
        done()
      })
    })
  })
})
