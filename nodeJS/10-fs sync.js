const { writeFileSync, readFileSync } = require('fs')
const first = readFileSync('./content/first.txt','utf-8')
const second = readFileSync('./content/second.txt','ascii')
console.log(first)
console.log(second)

console.log('start')
writeFileSync('./content/read sync.txt',
`Here is the sync result: 
${first}
${second}.`,
{flag:'a'})

console.log('Done with the task')
console.log('starting next one...')
