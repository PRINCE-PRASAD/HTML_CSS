/*
PS C:\Users\PRINCE\Desktop\java> cd .\express\
PS C:\Users\PRINCE\Desktop\java\express> ls
PS C:\Users\PRINCE\Desktop\java\express> npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defa

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (express) brownion_express
version: (1.0.0)
description: one of my basic kind of project
entry point: (index.js) app.js
test command:
git repository:
keywords:
author: guptaharami
license: (ISC)
About to write to C:\Users\PRINCE\Desktop\java\express\package.json:

{
  "name": "brownion_express",
  "version": "1.0.0",
  "description": "one of my basic kind of project",
  "main": "app.js",
  "scripts": {
t 1"
  },
  "author": "guptaharami",
  "license": "ISC"
}


Is this OK? (yes) yes

PS C:\Users\PRINCE\Desktop\java\express> npm install express

added 50 packages, and audited 51 packages in 5s

2 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
PS C:\Users\PRINCE\Desktop\java\express>

PS C:\Users\PRINCE\Desktop\java> cd .\express\
PS C:\Users\PRINCE\Desktop\java\express> npm install nodemon

added 116 packages, and audited 167 packages in 11s

18 packages are looking for funding
  run `npm fund` for details       

found 0 vulnerabilities
PS C:\Users\PRINCE\Desktop\java\express> nodemon aap.js
[nodemon] 2.0.15
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node aap.js`
[nodemon] clean exit - waiting for changes before restart

PS C:\Users\PRINCE\Desktop\java> cd .\express\


    Directory: C:\Users\PRINCE\Desktop\java\express


Mode                 LastWriteTime         Length Name                                                                                                            
----                 -------------         ------ ----                                                                                                            
d-----        14-02-2022     20:52                node_modules                                                                                                    
-a----        14-02-2022     20:47           1320 aap.js                                                                                                          
-a----        14-02-2022     20:52         109724 package-lock.json                                                                                               
-a----        14-02-2022     20:52            328 package.json                                                                                                    


PS C:\Users\PRINCE\Desktop\java\express> node aap.js
PS C:\Users\PRINCE\Desktop\java\express> node aap.js
PS C:\Users\PRINCE\Desktop\java\express> node aap.js
the app statred sucessfully on port 80
PS C:\Users\PRINCE\Desktop\java\express> ^C
PS C:\Users\PRINCE\Desktop\java\express> nodemon aap.js
[nodemon] 2.0.15
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node aap.js`
the app statred sucessfully on port 80
rs
[nodemon] starting `node aap.js`

*/
// -------------------------------------------------------------

const { application } = require("express");
const express = require("express")
const port = 80;

// app.use('/static', express.static('static'))

const aap = express();

aap.get("/", (req, res)=>{
  res.send("one of my first aap you are at home")
});

aap.get("/about", (req, res)=>{
  res.status(200).send("one of my first aap you are at about but in the get section")
});

aap.post("/about", (req, res)=>{
  res.send("one of my first aap you are at about but in the post section")
});

aap.get("/this", (req, res)=>{
  res.status(404).send("this is created only for status 404 ")
});

aap.listen(port, ()=>{
  console.log(`the app statred sucessfully on port ${port}`)
})




