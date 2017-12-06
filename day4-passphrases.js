import { funcOnStringFile } from 'file-parser'

const howManyValid = passphrases => {
  let numberValid = 0
  passphrases.forEach(passphrase => {
    if (isValid(passphrase)) ++numberValid
  })
  return numberValid
}

export const isValid = passphrase => {
  for (let i = 0; i < passphrase.length; i++) {
    if (passphrase.filter(el => el === passphrase[i]).length > 1)
      return false
  }
  return true
}

export const numberOfValidPassphrases = funcOnStringFile(howManyValid)
