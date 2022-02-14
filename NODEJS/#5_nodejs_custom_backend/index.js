const http = require('http');
const fs = require('fs');
// const { url } = require('inspector');

const hostname = '127.0.0.1';
const port = 3000;

const home = fs.readFileSync('index.html')
const about = fs.readFileSync('./about.html')
const service = fs.readFileSync('./service.html')
const contact = fs.readFileSync('./contact.html')

const server = http.createServer((req, res)=>{
    console.log(req.url);
    url = req.url;

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    if(url == '/'){
        res.end(home);
    }
    else if(url == '/about'){
        res.end(about);
    }
    else if(url == '/service'){
        res.end(service);
    }
    else if(url == '/contact'){
        res.end(contact);
    }
    else{
        res.statusCode = 404;
        res.end("<h1>404 not found</h>");
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

// there is two way for open the server 
// 1st way go on terminal then write node then space javascript file name for example ( node ./index.js )

// 2nd way go on terminal then type cd then space foldername and in second line node space javascript file name
// example 1st line (cd #5_nodejs_custom_backend)
        // 2nd line (node ./index.js) 
        //  then click in the link provided by the node js
