import { parseFileOfStringsToEvaluate } from 'file-parser'

const howMany = predicate => passphrases => passphrases.filter(predicate).length
const validBasedOn = predicate => passphrase => !passphrase.some(word => passphrase.filter(predicate(word)).length > 1)

const isEqual = check => el => el === check
const isAnAnagram = check => el => el.split('').sort().toString() === check.split('').sort().toString()

export const isValidBasedOnDuplicates = validBasedOn(isEqual)
export const isValidBasedOnAnagrams = validBasedOn(isAnAnagram)

export const numberOfValidDuplicatesPassphrases = parseFileOfStringsToEvaluate(howMany(isValidBasedOnDuplicates))
export const numberOfValidAnagramsPassphrases = parseFileOfStringsToEvaluate(howMany(isValidBasedOnAnagrams))
