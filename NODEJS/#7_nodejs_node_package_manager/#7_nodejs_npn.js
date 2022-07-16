console.log("this is npm");

// PS C:\Users\PRINCE\Desktop\java> npm --version
// 8.3.1
// PS C:\Users\PRINCE\Desktop\java> node --version
// v17.4.0


/*

PS C:\Users\PRINCE\Desktop\java> 
PS C:\Users\PRINCE\Desktop\java> cd .\#7_nodejs_node_package_manager\
PS C:\Users\PRINCE\Desktop\java\#7_nodejs_node_package_manager> ls



PS C:\Users\PRINCE\Desktop\java\#7_nodejs_node_package_manager>
PS C:\Users\PRINCE\Desktop\java\#7_nodejs_node_package_manager> ls


    Directory: C:\Users\PRINCE\Desktop\java\#7_nodejs_node_package_manager


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----        13-02-2022     23:43            158 #7_nodejs_npn.js


PS C:\Users\PRINCE\Desktop\java\#7_nodejs_node_package_manager> npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (#7_nodejs_node_package_manager) first_package
version: (1.0.0)
description: one of the 1st package created by me
entry point: (#7_nodejs_npn.js)
test command:
git repository:
keywords: awesome
author: prasad
license: (ISC)
About to write to C:\Users\PRINCE\Desktop\java\#7_nodejs_node_package_manager\package.json:

{
  "name": "first_package",
  "version": "1.0.0",
  "description": "one of the 1st package created by me",
  "main": "#7_nodejs_npn.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "awesome"
  ],
  "author": "prasad",
  "license": "ISC"
}


Is this OK? (yes) yes*/

//"npm init" for providing the details and starting
// for install u can us "i" insted of "install" 
// if folder is not showing then cse shortcut for copy
// use "npm install" command if u delete ur node_modules folder.
//  if u want u use a spesefic version of any pakeges then    "npm packege_name@version" -  npm expess@1.12.5
// here version no is major.minor(new-function).pach(bug-fix)
// "npm install nodemon --save-dev" if u nedd any depndeny in only at the time of development not the main then u can use ths command
//"npm install nodemon --global" if u want to keep this file as global or if u want to use this packege not oly this projet but others project also
// u can get exatly version(^)/latest vesrion(>)/accept new patch(~) u havew to delete node module and use any of of symbol as per ur use in package.json and then npm i 
// when ever u deal with package use "npm" becayuse it is a package manaher
// if u use nodemon u dont have to restart ur (sever or terminal) again nd again just save it it will restart automaticly
//then type nodemon index.js or app.js 
// 

