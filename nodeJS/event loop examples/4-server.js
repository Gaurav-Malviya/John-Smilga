
const http= require('http')

const server = http.createServer((req, res)=>
{
    console.log('request event')
    res.end("I had strings, but now I'm free.")
})

server.listen(5001, ()=>
{
    console.log('Server is listening on port: 5001')
})