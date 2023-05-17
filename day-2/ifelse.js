//if else

let a = 100
if(a>70){
    console.log("a lebih besar dari 70")
} else {
    console.log("a lebih kecil dari 70")
}

if(a == 100){
    console.log("nilainya 100")
}

let classStatus = "close"
let minuteRemain = 0
if (classStatus == "open"){
console.log("kelas bootcam sedang berjalan")
}else if (minuteRemain){
    console.log("kelas bootcamp tersisa 5 menit lagi")
} else {
    console.log("kelas bootcamp telah berakhir")
}

let grade = 90
if (grade >= 70){
    if(grade >=90){
        console.log("Nilai A")
    } else {
        console.log("Nilai B")
    }
} else{
    console.log("Nilai C")
}

//Switch case
let tombol = 0
switch (tombol){
    case 1:{
        console.log("turn on")
        break
    }
    case 2:{
        console.log("turn off")
        break
    }
    case 3:{
        console.log("menu setting")
        break
    }
    default:{  //tidak masuk dalam deklarasi, jika tidak di tulis default gpp tapi tidak akan menampilkan apa apa
        console.log("do nothing")
        break
    }
}

//ternary
let x = 100
let hasil1 = x > 50 ? "lebih besar dari 50" : "lebih kecil dari 50"
console.log(hasil1)

//ternary if else if
let y = 70
let hasil = y === 100 ? "nilai 100" : y > 50?"nilai lebih dari 50" : "lebih kecil dari 50"
console.log(hasil)

//loop
let test = 1 //start condition
while (test <= 5){ //stop condition
    console.log("looping ke - ", test) //output
    test++ //incremen (menambahkan 1 hingga memenuhi kondisi)
}


//contoh while loop mencari bilangan prima
let n = 20; //cari bilangan prima 1 sampe 20
let i = 2; //inisiasi bilangan terkeecil
while (i <= n) { //selama nilai i kurang atau sama dengan n maka dia akan loop sampai terpenuhi
    let bilanganPrima = true; //inisiasi variabel bilangan prima dengan nilai true
    let j =2; //inisiasi variabel untuk dimasukan ke rumus
    while (j < i){ //selama nilai j kurang dari i, maka loop berjalan
        if(i % j === 0){ //jika i bisa dibagi dengan j, maka i bukan bilangan prima
            bilanganPrima =false //ubah nilai menjadi false
            break //loop selesai
        }
        j++ //increment atau menambahkan 1 ke nilai j tiap kali lopp selesai
    }
    if(bilanganPrima) { //jika bilangan prima bernilaai true maka i adalah bilangan prima
        console.log(i) //output nilai i
    }
    i++
}

//forloop
for(let i = 0; i < 5; i++){
    console.log(`for loop ke - ${i}`)
}

//faktorial
//mengkalikan elemen didalam aray
const arr = [2,3,4,5] //buat aray
let result = 1 //buat var result dengan nilai 1
console.log(arr.length) //arr.lenght untuk menghitung banyaknya data dalam satu array
//buat variabel i dengan nilai 0, selama nilai i kurang dari panjang array makan dia bakal loop
for(let i = 0; i < arr.length; i++){
    result *= arr[i] //kalikan result dengan element array arr pada indeks i
}
console.log(result) //result

//function
function testX(){
    console.log("test")
}
testX() 

//Row function
const sapa =(nama,nama1)=> {
    console.log(`hai ${nama} ${nama1}`)
}
sapa ("manies","qoeh")

//fuction penjumlahan
function penjumlahan(angka){
    return angka + 12
}
let hasil0 = penjumlahan(3)
let hasil2 = penjumlahan(8)
console.log(`hasil penjumlahan = ${hasil0}`)
console.log(`hasil penjumlahan = ${hasil2}`)

//cara merubah nilai function 
function cetakAngka (angka = 1){
    return angka
}
let hasil3 = cetakAngka(2)
console.log(` ${hasil3}`)