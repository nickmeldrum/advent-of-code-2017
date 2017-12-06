import fs from 'fs'

const parse = (data, elementParser) => data.split('\n')
  .filter(row => row)
  .map(row => row.split('\t').map(element => elementParser(element)))

const parseFileTransformingElements = elementParser => func => (filename, cb) => {
  fs.readFile(`./${filename}.txt`, 'utf8', (err, data) => {
    if (err) throw err
    cb(func(parse(data, elementParser)))
  })
}

const toNumbers = el => parseInt(el, 10)
const notAtAll = el => el

export const parseFileOfNumbersToEvaluate = parseFileTransformingElements(toNumbers)
export const parseFileOfStringsToEvaluate = parseFileTransformingElements(notAtAll)
