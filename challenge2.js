console.log("");
console.log("-------------------- SOAL 1 --------------------");
console.log("");

let num1 = 11
let num2 = 2
let operation = "+"

function calculator(operation, num1, num2) {
    if(isNaN(num1) || isNaN(num2)){
        return "Please enter number!";
    }
    if (operation == "+" ) {
        return num1 + num2;
    } 
    else if (operation == "-") {
        return num1 - num2;
    } 
    else if (operation == "*") {
        return num1 * num2;
    } 
    else if (operation == "/") {
        return num1 / num2;
    } 
    else {
        return "(?)";
    }
}

console.log("+: ", calculator('+', "abcd", 3));
console.log("+: ", calculator('+', 10, 3));
console.log("-: ", calculator('-', 16, 5));
console.log("*: ", calculator('*', 3, 2));
console.log("/: ", calculator('/', 5, 5));
console.log("?: ", calculator('kali', 5, 10));


console.log("");
console.log("-------------------- SOAL 2 --------------------");
console.log("");

let pangkatFunction = function(base, exponent){
    let pangkat = Math.pow(base, exponent)

    console.log("Hasil Pangkat : ", pangkat);
}

let base = 5;
let exponent = 5;
pangkatFunction(base, exponent);



// declaration
// function pangkatFunction(baseSoal3, exponentSoal3){
//     let pangkat = Math.pow(baseSoal3, exponentSoal3)

//     console.log("Hasil Pangkat : ", pangkat);
// }

// let baseSoal3 = 2;
// let exponentSoal3 = 2;
// pangkatFunction(baseSoal3, exponentSoal3);