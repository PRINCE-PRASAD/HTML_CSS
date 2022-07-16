/*PS C:\Users\PRINCE\Desktop\GITHUB\html-css-javascript-basics\NODEJS\#8_nodejs_web_through_express\Express> npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (express) princeiste
version: (1.0.0)
description: one of starting apps
entry point: (index.js) app.js
test command:
git repository:
keywords:
author: prince
license: (ISC)
About to write to C:\Users\PRINCE\Desktop\GITHUB\html-css-javascript-basics\NODEJS\#8_nodejs_web_through_express\Express\package.json:

{
  "name": "princeiste",
  "version": "1.0.0",
  "description": "one of starting apps",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "prince",
}


Is this OK? (yes) yes

// step -2 

PS C:\Users\PRINCE\Desktop\GITHUB\html-css-javascript-basics\NODEJS\#8_nodejs_web_through_express\Express> npm i express        

added 57 packages, and audited 58 packages in 3s

7 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities*/




// ----------------------------------------------------------------------------------
const { application } = require("express");
const express = require("express")
const port = 80;

// app.use('/static', express.static('static'))

const app = express();

app.get("/", (req, res)=>{
  res.send("one of my first app you are at home")
});

app.get("/about", (req, res)=>{
  res.status(200).send("one of my first app you are at about but in the get section")
});

app.post("/about", (req, res)=>{
  res.send("one of my first app you are at about but in the post section")
});

app.get("/this", (req, res)=>{
  res.status(404).send("this is created only for status 404 ")
});

app.listen(port, ()=>{
  console.log(`the app statred sucessfully on port ${port}`)
})

/*in thundrclient or postman type localhost:80
benefit of port 80 if u just write "localhost" without portnumber it will work */