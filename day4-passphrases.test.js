import { isValidBasedOnDuplicates, isValidBasedOnAnagrams, numberOfValidDuplicatesPassphrases, numberOfValidAnagramsPassphrases } from 'day4-passphrases'
import { test } from 'test-creator'

describe('day4 - high-entropy passphrases', () => {
  describe('part 1 - validate duplicate passphrases', () => {
    test(isValidBasedOnDuplicates).withData([
      {input: ['aa', 'bb', 'cc', 'dd', 'ee'], expected: true},
      {input: ['aa', 'bb', 'cc', 'dd', 'aa'], expected: false},
      {input: ['aa', 'bb', 'cc', 'dd', 'aaa'], expected: true},
    ])

    it('part 1 - validate duplicate passphrases from file', done => {
      numberOfValidDuplicatesPassphrases('day4-test-input', answer => {
        expect(answer).toEqual(2)
        done()
      })
    })

    it('just output the puzzle answer and pass :)', done => {
      numberOfValidDuplicatesPassphrases('day4-input', answer => {
        console.log('And the day 4 part 1 answer is:', answer)
        done()
      })
    })
  })

  describe('part 2 - nick validate anagram passphrases', () => {
    test(isValidBasedOnAnagrams).withData([
      {input: ['abcde', 'fghij'], expected: true},
      {input: ['abcde', 'xyz', 'ecdab'], expected: false},
      {input: ['a', 'ab', 'abc', 'abd', 'abf', 'abj'], expected: true},
      {input: ['iiii', 'oiii', 'ooii', 'oooi', 'oooo'], expected: true},
      {input: ['oiii', 'ioii', 'iioi', 'iiio'], expected: false},
    ])

    it('part 2 - validate anagram passphrases from file', done => {
      numberOfValidAnagramsPassphrases('day4-part2-test-input', answer => {
        expect(answer).toEqual(4)
        done()
      })
    })

    it('just output the puzzle answer and pass :)', done => {
      numberOfValidAnagramsPassphrases('day4-input', answer => {
        console.log('And the day 4 part 2 answer is:', answer)
        done()
      })
    })
  })
})
