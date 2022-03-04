const http = require('http')

const server = http.createServer((req,res)=>
{
    if(req.url === '/')
    {
        res.end('Hello')
    }
    else if(req.url ==='/about')
    {
        res.end('About, About, About,  About, About, About')
        
    }
    res.end(`
        <h1 style='color:brown'>OOPS</h1>
        <p>It's a shame!!!</p>
        <a href ='/'>Back to home Page</a>
    `)
    
})

server.listen(5001)