console.log("");
console.log("-------------------- SOAL 1 --------------------");
console.log("");

let num1 = 22
let num2 = 10
let operation = "+"

let calculator = (operation, num1, num2) => {
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
};

console.log(`Hasil dari : ${num1} ${operation} ${num2} = ${calculator(operation, num1, num2)}`);



console.log("");
console.log("-------------------- SOAL 2 --------------------");
console.log("");

function arrow() {

    console.log("========== ARROW ==========");//ARROW

    let temperature = celcius => {
        let fahrenheit = (celcius * 9 / 5) + 32;
        return fahrenheit
    };

    let celcius = 41;
    let fahrenheitTemp = temperature(celcius)

    console.log(`Celsius Temp : ${celcius} => Fahrenheit Tempe : ${fahrenheitTemp}`);
}
arrow();

console.log("");

function currying(){

    console.log("========== CURRYING ==========");//CURRYING

    function fahrenheit(celcius) {
        return(celcius * 9 / 5) + 32;
    };

    function temperature(celcius){
        let fahrenheitTemp = fahrenheit(celcius)
        return `Celcius Temp : ${celcius} -> ${fahrenheitTemp} : Fahrenheit Temp`;
    }

    let celcius = 39;
    let result = temperature(celcius)

    console.log(result);
}
currying();

console.log("");