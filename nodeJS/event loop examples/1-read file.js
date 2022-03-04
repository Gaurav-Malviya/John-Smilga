const {readFile} = require('fs')

console.log('Executing task 1.')
readFile('../content/first.txt','utf-8',(err,result) =>
{
    if(err) 
    { 
        return console.log(err) 
    }
    console.log(result.toUpperCase()+".")
    console.log('Completed task 1.')
})
console.log('Executing task 2.')
console.log('Executing task 3.')
console.log('Executing task 4.')
console.log('Executing task 5.')