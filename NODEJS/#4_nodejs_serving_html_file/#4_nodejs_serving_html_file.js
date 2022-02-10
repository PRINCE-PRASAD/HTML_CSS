const http = require('http')
const fs = require('fs')
const testfileContent = fs.readFileSync('quary.html')

const server = http.createServer((req, res)=>{
    res.writeHead(200, {'Content-type':'text/html'});
    res.end(testfileContent)
})
server.listen(80, '127.0.0.1', ()=>{
    console.log("here we on port 80")
})

// here we have to type 127.0.0.1 on googe to check the server