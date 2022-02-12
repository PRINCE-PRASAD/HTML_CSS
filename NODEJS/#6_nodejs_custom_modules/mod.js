console.log("This come under module");

function testaverage(arr) {
    let sum = 0;
    arr.forEach(element => {
    sum += element;    
    });
    return sum/arr.lenght;
     }

    // module.exports = testaverage;

    module.exports = {
        avg: testaverage,
        name1: "gupta",
        profil: "github"
    }
// module.exports.name1 = "prince";
