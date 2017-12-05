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

const sumEvenly = () => 0

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