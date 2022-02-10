// synchronous or blocking
// -line by line execution

// asynchronous or nonblocking
// line by line execution not guranteed
// callbacks will fire

const fs = require("fs");
let testtext = fs.readFile("test.txt", "utf-8", (err, data)=>{
    console.log(err, data);
});
console.log("this is a message");

// this is a type of nonblocking
// her err is blank 
// make a txt file and write the name of the file in codes
// here go on new terminal and type [.\#3_nodejs_blocking_non_blocking_call.js]
