
const {readFile, writeFile, read} = require('fs')

console.log('Start')
readFile('./content/first.txt','utf-8',(err,result)=>
{
    if(err)
    {
        console.log(err)
    }
    
    console.log('File 1:',result)
    const first= result
    
    readFile('./content/second.txt','utf-8', (err, result)=>
    {
        if(err)
        {
            console.log(err)
            return
        }
        
        const second = result
        console.log('File 2:',second)
        writeFile('./content/result async.txt',
        `Here is the async result: 
        ${first} 
        ${second}.`,
        (err,result)=>
        {
            if(err)
            {
                console.log(err)
            }
            console.log('Done with this task.')
        })
        
    })
    
})

console.log('Starting next task...')
function gofirst()
{
    console.log('Hello. Hello. Hello. Hello. Hello. Hello. Hello. Hello.')
}
gofirst()
