// STRING
// MANIPULASI STRING

console.log("-------------------- STRING --------------------");
console.log("===> Manipulasi String <===");

// 1. Buatlah variable dengan "nama" lalu isi dengan nama lengkap anda 
// 2. Hitung panjang nama anda menggunakan metode length
let nameUser = "Oliver Sebastian";
console.log("nama : ", nameUser.length);

// 3. Ubah semua huruf dalam nama Anda menjadi huruf besar dan tampung di variable
let upperCaseName = nameUser.toUpperCase();
console.log("uppercase : ", upperCaseName);


// 4. Ubah semua huruf dalam nama Anda menjadi huruf kecil dan tampung di variable
let lowerCaseName = nameUser.toLowerCase();
console.log("lowercase : ", lowerCaseName);

// 5. Ambil huruf pertama dari variable "nama"
let fistWord = nameUser;
console.log("huruf pertama : ", fistWord[0]);

// 6. Ambil potongan nama anda, misalnya nama pertama anda
let slicingName = nameUser;
console.log("nama depan : ", slicingName.slice(0, 6));

// 7. Gabungkan potongan nama anda dengan string "Love Javascript"
let potonganNama = nameUser;
console.log("nama depan + string : ", potonganNama.slice(0, 6) + " Love Javascript");

// 9. Print huruf terakhir dari variable "name"
let lastWord = nameUser;
console.log("hurus terakhir : ", nameUser[nameUser.length - 1]);

// MENGUBAH TIPE DATA
console.log("===> Mengubah Tipe Data <===");

// 1. Buat variabel dengan nama umur dan isi dengan umur Anda dalam bentuk string
let age = "19";
// 2. Ubah variabel umur menjadi tipe data number
let ageNumber = parseInt(age);
console.log("age : ", ageNumber);

// 3. Buat variabel dengan nama tinggi dan isi dengan tinggi Anda dalam bentuk string
let height = "165cm";

// 4. Ubah variabel tinggi menjadi tipe data float
let heightFloat = parseFloat(height);
console.log("height : ", heightFloat);

// PENGECEKAN TIPE DATA
// 1. Buat variabel dengan nama data dan isi dengan nilai apapun (string, number, boolean, dll.)
let randomData = "Hallo Oliver disini...";

// 2. Print tipe data dari variabel data
console.log("Type of randomData : ", typeof randomData);

console.log("");
console.log("-------------------- NUMBER --------------------");

// PENJUMLAHAN DAN PENGURANGAN
console.log("===> + - <===");

// 1. Buatlah sebuah variabel num1 dengan nilai 10 dan variabel num2 dengan nilai 5.
let num1 = 10;
let num2 = 5;

// 2. Hitung hasil penjumlahan dan pengurangan dari kedua angka tersebut.
let plus = num1 + num2;
let minus = num1 - num2;

// 3. Tampilkan hasil penjumlahan dan pengurangan dengan console.log.
console.log("Hasil dari num1 + num2 = ", plus);
console.log("Hasil dari num1 - num2 = ", minus);

// PERKALIAN DAN PEBAGIAN
console.log("===> * / <===");

// 1. Buatlah sebuah variabel num3 dengan nilai 6 dan variabel num4 dengan nilai 2.
let num3 = 6;
let num4 = 2;

// 2. Hitung hasil perkalian dan pembagian dari kedua angka tersebut.
let multiple = num3 * num4;
let divide = num3 / num4;

// 3. Tampilkan hasil perkalian dan pembagian dengan console.log.
console.log("Hasil dari num3 x num4 : ", multiple);
console.log("Hasil dari num3 / num4 : ", divide);

// PANGKAT BILANGAN
console.log("===> Pangkat <===");

// 1. Buatlah sebuah variabel base dengan nilai 3 dan variabel exponent dengan nilai 4.
let base = 3;
let exponent = 4;

// 2. Hitung hasil dari pangkat base dipangkatkan exponent.
let pangkat = Math.pow(base, exponent)

// 3. Tampilkan hasil pangkat dengan console.log.
console.log("Hasil Pangkat : ", pangkat);

// RATA-RATA DARI ARRAY
console.log("===> Average <===");

// 1. Buatlah sebuah array numbers yang berisi angka-angka: [5, 8, 12, 4, 6].
let numbers = [5, 8, 12, 4, 6];
let totalNumbers = 0;

// 2. Hitung rata-rata dari angka-angka di dalam array.
for (let i = 0; i < numbers.length; i++){
    totalNumbers += numbers[i];
}
  
// 3. Tampilkan hasil rata-rata dengan console.log.
let average = totalNumbers / numbers.length;
console.log("Average numbers : ", average);

// BILANGAN GANJIL ATAU GENAP
console.log("===> Odd Even Number <===");

// 1. Buatlah sebuah variabel num dengan nilai 7.
let num = 7;

// 2. Gunakan kondisi if untuk mengecek apakah bilangan tersebut ganjil atau genap.
// 3. Tampilkan pesan yang sesuai dengan kondisi dengan console.log.
if (num % 2 != 0){
    console.log("Angka : ", num + " -> Bilangan Ganjil");
}
else{
    console.log("Angka : ", num + " -> Bilangan Genap");
}

console.log("");
console.log("-------------------- R@nD0M --------------------");

// 1. BUATKAN ANGKA RANDOM 1 SAMPAI 5
let randomNumber = Math.floor(Math.random() * 5) + 1;
console.log("R@nd0M Numb3R : ", randomNumber);








