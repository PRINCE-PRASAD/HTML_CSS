// const fs = require("fs");
// const texttest = fs.readFileSync("test.txt", "utf-8");
// console.log(texttest);

// make a txt file and write the name of the file in codes
// here go on new terminal and type [node #2_nodejs_module.js]
// ----------------------------------------------------------------------------------------------

const fs = require("fs");

let texttest = fs.readFileSync("test.txt", "utf-8");
//here we provide code for read test.txt
texttest = texttest.replace("browser", "test2");
//here we privide code to replace the file with test2 file

console.log("here is content of file is ")
console.log(texttest);

console.log("here we are going to create a new file=====>")
fs.writeFileSync("test2.txt", texttest);
// here we provide code for write 

// make a txt file and write the name of the file in codes
// here go on new terminal and type [node #2_nodejs_module.js]