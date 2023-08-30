// STRING
// MANIPULASI STRING

console.log("");
console.log("-------------------- SOAL 1 --------------------");
console.log("");

console.log("-------------------- STRING --------------------");
console.log("===> Manipulasi String <===");

function stringManipulation(nameUser) {
    console.log("nama : ", nameUser.length);

    let upperCaseName = nameUser.toUpperCase();
    console.log("uppercase : ", upperCaseName);

    let lowerCaseName = nameUser.toLowerCase();
    console.log("lowercase : ", lowerCaseName);

    let fistWord = nameUser;
    console.log("huruf pertama : ", fistWord[0]);

    let slicingName = nameUser;
    console.log("nama depan : ", slicingName.slice(0, 6));

    let potonganNama = nameUser;
    console.log("nama depan + string : ", potonganNama.slice(0, 6) + " Love Javascript");

    let lastWord = nameUser;
    console.log("hurus terakhir : ", nameUser[nameUser.length - 1]);
}


let nameUser = "Oliver Sebastian";
stringManipulation(nameUser);


function dataTypes(age, height){
    let ageNumber = parseInt(age);
    let heightFloat = parseFloat(height);
    
    console.log("age : ", ageNumber);
    console.log("height : ", heightFloat);
}


let age = "19";
let height = "165cm";
dataTypes(age, height);


function dataTypesCheck(randomData){
    console.log("Type of randomData : ", typeof randomData);
}

let randomData = "Hallo Oliver disini...";
dataTypesCheck(randomData);


console.log("");
console.log("-------------------- NUMBER --------------------");


function plusMinus(num1, num2){
    let plus = num1 + num2;
    let minus = num1 - num2;
    
    console.log("Hasil dari num1 + num2 = ", plus);
    console.log("Hasil dari num1 - num2 = ", minus);
}

let num1 = 10;
let num2 = 5;
plusMinus(num1, num2);


function multipleDevide(num3, num4){
    let multiple = num3 * num4;
    let divide = num3 / num4;
    
    console.log("Hasil dari num3 x num4 : ", multiple);
    console.log("Hasil dari num3 / num4 : ", divide);
}

let num3 = 6;
let num4 = 2;
multipleDevide(num3, num4);


function pangkatFunction(base, exponent){
    let pangkat = Math.pow(base, exponent)

    console.log("Hasil Pangkat : ", pangkat);
}

let base = 3;
let exponent = 4;
pangkatFunction(base, exponent);


function averageFunction(numbers, totalNumbers){
    for (let i = 0; i < numbers.length; i++){
        totalNumbers += numbers[i];
    }
    
    let average = totalNumbers / numbers.length;
    console.log("Average numbers : ", average);
}

let numbers = [5, 8, 12, 4, 6];
let totalNumbers = 0;
averageFunction(numbers, totalNumbers);


function oddEven(num){
    if (num % 2 != 0){
        console.log("Angka : ", num + " -> Bilangan Ganjil");
    }
    else{
        console.log("Angka : ", num + " -> Bilangan Genap");
    }
}

let num = 7;
oddEven(num);


console.log("");
console.log("-------------------- R@nD0M --------------------");


function rnFunction(){
    let rn = Math.floor(Math.random() * 5) + 1;
    return rn;
}

let random = rnFunction();
console.log("R@nd0M Numb3R : ", random);


function soal2() {
    console.log("");
    console.log("-------------------- SOAL 2 --------------------");
    console.log("");

    function temperature (celcius){
        let fahrenheit = (celcius * 9 / 5) + 32;
        return fahrenheit;
    }
    
    
    let celciusTemp = "35";
    let fahrenheitTemp = temperature(celciusTemp);
    console.log(`Celcius Temparature : ${celciusTemp} => Fahrenheit Temperatur : ${fahrenheitTemp}`);
}
soal2();

// console.log("");
// console.log("-------------------- SOAL 2 --------------------");
// console.log("");

// function temperature (celcius){
//     let fahrenheit = (celcius * 9 / 5) + 32;
//     return fahrenheit;
// }


// let celciusTemp = "34";
// let fahrenheitTemp = temperature(celciusTemp);

// console.log(`Celcius Temparature : ${celciusTemp} => Fahrenheit Temperatur : ${fahrenheitTemp}`);



console.log("");
console.log("-------------------- SOAL 3 --------------------");
console.log("");

function pangkatFunction(baseSoal3, exponentSoal3){
    let pangkat = Math.pow(baseSoal3, exponentSoal3)

    console.log("Hasil Pangkat : ", pangkat);
}

let baseSoal3 = 2;
let exponentSoal3 = 2;
pangkatFunction(baseSoal3, exponentSoal3);


console.log("");
console.log("-------------------- SOAL 4 --------------------");
console.log("");

function cekVokalLetter(letter){
    
    if (letter == 'a' || letter == 'i' || letter == 'u' || letter == 'e' || letter == 'o'){
        console.log("Letter is Vokal");
    }
    else{
        console.log("Letter is not vokal");
    }
}

let letter = 'U';
letter = letter.toLowerCase();
cekVokalLetter(letter);


