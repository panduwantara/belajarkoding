
const { error } = require("console");
const fs = require("fs");
const data = fs.readFileSync("number.txt", "utf8").split(",");

async function coba(){
const hasil = data.sort((a, b) => a - b);
return hasil 
}
fs.writeFileSync("number.txt", data.join());
// coba().then((data) => console.log(data), (error) => console.log(error))

async function mulai(){
const fs = require("fs");
const data1 = fs.readFileSync("mulai.txt", "utf8").split(",");
return data1
}
// console.log( mulai())

async function selesai(){
    const fs = require("fs");
    const data2 = fs.readFileSync("selesai.txt", "utf8").split(",");
    return data2
}
//memproses semua function
//then untuk meresolve, tanpa the tidak akan keluar hasilnya (masih promises nya doang)
mulai().then((data) => {
    coba().then((data) => console.log(data), (error) => console.log(error))
    selesai().then((data) => console.log('selesai'), (error) => console.log(error))
    console.log('mulai')
}, (error) => console.log(error))

//kebetulan hasilnya sesuai yang di mau
//untuk realnya bisa kemungkinan dipengaruhi oleh kecepatan download dan upload
//console.log( selesai())
// selesai().then((data) => console.log('selesai'), (error) => console.log(error))







//console.log("angka udah berurut dan ditampilkan pada file number.js");

// setTimeout(function(){
//     console.log(hasil)
// }, 1500)

// setTimeout(function(){
//     console.log("selesai")
// }, 2000)

// setTimeout(function(){
//     console.log("mulai")
// }, 1000)



