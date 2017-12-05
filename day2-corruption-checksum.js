import fs from 'fs'

const parse = data => data.split('\n')
  .filter(row => row)
  .map(row => row.split(' ').map(element => parseInt(element, 10)))

const sum = spreadsheet => {
  let result = 0
  spreadsheet.forEach(row => {
    let min = Number.MAX_SAFE_INTEGER
    let max = 0
    row.forEach(element => {
      if (element < min) min = element
      if (element > max) max = element
    })
    result = result + max - min
  })
  return result
}

export const sumAllDifferences = (filename, cb) => {
  fs.readFile(`./${filename}.txt`, 'utf8', (err, data) => {
    if (err) throw err
    cb(sum(parse(data)))
  })
}
