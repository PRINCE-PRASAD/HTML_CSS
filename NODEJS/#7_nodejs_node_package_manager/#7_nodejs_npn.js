console.log("this is npm");

// PS C:\Users\PRINCE\Desktop\java> npm --version
// 8.3.1
// PS C:\Users\PRINCE\Desktop\java> node --version
// v17.4.0


/*

PS C:\Users\PRINCE\Desktop\java> 
PS C:\Users\PRINCE\Desktop\java> cd .\#7_nodejs_node_package_manager\
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


Is this OK? (yes) yes
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


Is this OK? (yes) yes
PS C:\Users\PRINCE\Desktop\java\#7_nodejs_node_package_manager>
PS C:\Users\PRINCE\Desktop\java\#7_nodejs_node_package_manager> npm install slugify

added 1 package, and audited 2 packages in 2s

found 0 vulnerabilities
PS C:\Users\PRINCE\Desktop\java\#7_nodejs_node_package_manager> npm install express

added 50 packages, and audited 52 packages in 5s

2 packages are looking for funding

found 0 vulnerabilities
PS C:\Users\PRINCE\Desktop\java\#7_nodejs_node_package_manager> npm uninstall express

removed 50 packages, and audited 2 packages in 1s
found 0 vulnerabilities
PS C:\Users\PRINCE\Desktop\java\#7_nodejs_node_package_manager> npm install slugify@1.3.5

changed 1 package, and audited 2 packages in 1s
found 0 vulnerabilities
PS C:\Users\PRINCE\Desktop\java\#7_nodejs_node_package_manager> npm install nodemon

added 116 packages, and audited 118 packages in 11s

16 packages are looking for funding
  run `npm fund` for details
found 0 vulnerabilities
PS C:\Users\PRINCE\Desktop\java\#7_nodejs_node_package_manager> npm uninstall nodemon

removed 116 packages, and audited 2 packages in 1s
found 0 vulnerabilities

PS C:\Users\PRINCE\Desktop\java\#7_nodejs_node_package_manager> npm i browserify
npm WARN deprecated querystring@0.2.0: The querystring API is considered Legacy. new code should use the URLSearchParams API instead.

added 179 packages, and audited 181 packages in 29s

39 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
PS C:\Users\PRINCE\Desktop\java\#7_nodejs_node_package_manager> npm i nodemon --global

changed 116 packages, and audited 117 packages in 9s

16 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

PS C:\Users\PRINCE\Desktop\java\#7_nodejs_node_package_manager> nodemon .\#7_nodejs_npn.js
[nodemon] 2.0.15
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json  
[nodemon] starting `node .\#7_nodejs_npn.js`
this is npm
[nodemon] clean exit - waiting for changes before restart*/



// for install u can us i insted of install 
// if folder is not showing then cse shortcut for copy

