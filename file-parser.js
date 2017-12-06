import fs from 'fs'

const parse = (data, elementParser) => data.split('\n')
  .filter(row => row)
  .map(row => row.split('\t').map(element => elementParser(element)))

const funcOnFile = elementParser => func => (filename, cb) => {
  fs.readFile(`./${filename}.txt`, 'utf8', (err, data) => {
    if (err) throw err
    cb(func(parse(data, elementParser)))
  })
}

export const funcOnNumberFile = funcOnFile(el => parseInt(el, 10))
export const funcOnStringFile = funcOnFile(el => el)
