console.log("this funtion js file");
let Name = "prince";
let Name1 = "rahul";
let Name2 = "hemanta";
let Name3 = "sirat";
let Name4 = "ayush";
console.log(Name  + " is created brwonion");
console.log(Name1 + " is created brwonion");
console.log(Name2 + " is created brwonion");
console.log(Name3 + " is created brwonion");
console.log(Name4 + " is created brwonion");

// one more way to do same by using the function

function greet(naam) {
    console.log(naam + " is destroyed brownion");
    }
    let naam = "pisu";
    let naam1 = "piyush";
    let naam2 = "pooja";
    let naam3 = "aditya";
    greet(naam);
    greet(naam1);
    greet(naam2);
    greet(naam3);

    // one more way for to do for extra so

    function greet(naaam, greettext = " greetings from javascript") {
        console.log(greettext + " " + naaam);
        console.log(naaam + " is thinked about brownion");
        }
        let naaam = "pisu";
        let naaam1 = "piyush";
        let naaam2 = "pooja";
        let naaam3 = "aditya";

        let greettext = "good morning";

        greet(naaam, greettext);
        greet(naaam1, greettext);
        greet(naaam2, greettext);
        greet(naaam3);
        //here we don't give any greettext to naaam3 so default value of greet that is " greetings from javascript"is provided
