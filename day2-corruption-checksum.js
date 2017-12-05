import fs from 'fs'

const parse = data => data.split('\n')
  .filter(row => row)
  .map(row => row.split('\t').map(element => parseInt(element, 10)))

const sumDifferences = spreadsheet => spreadsheet.reduce((sum, row) => {
  let min = Number.MAX_SAFE_INTEGER
  let max = 0
  row.forEach(element => {
    if (element < min) min = element
    if (element > max) max = element
  })
  return sum + max - min
}, 0)

const sumEvenly = spreadsheet => spreadsheet.reduce((sum, row) => {
  for (let i = 0; i < row.length; i++) {
    for (let j = i; j < row.length; j++) {
      const dividend = row[i] > row[j] ? row[i] : row[j]
      const divisor = row[i] > row[j] ? row[j] : row[i]
      if (dividend % divisor === 0) {
        return sum + dividend / divisor
      }
    }
  }
  throw new Error('no evenly divisble numbers found')
}, 0)

export const sumAllDifferences = (filename, cb) => {
  fs.readFile(`./${filename}.txt`, 'utf8', (err, data) => {
    if (err) throw err
    cb(sumDifferences(parse(data)))
  })
}

export const sumEvenlyDivisibleValues = (filename, cb) => {
  fs.readFile(`./${filename}.txt`, 'utf8', (err, data) => {
    if (err) throw err
    cb(sumEvenly(parse(data)))
  })
}
