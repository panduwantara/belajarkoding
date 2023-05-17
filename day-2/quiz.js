//Switch case
let hari = "sunday"
switch (hari){
    case "monday":{
        console.log(1)
        break
    }
    case "tuesday":{
        console.log(2)
        break
    }
    case "wednesday":{
        console.log(3)
        break
    }
    case "thursday" :{
        console.log(4)
        break
    }
    case "friday":{
        console.log(5)
        break
    }
    case "saturday":{
        console.log(6)
        break
    }
    case "sunday":{
        console.log(7)
        break
    }
    default:{  //tidak masuk dalam deklarasi, jika tidak di tulis default gpp tapi tidak akan menampilkan apa apa
        console.log("Input tidak valid")
        break
    }
}

////////////////////////////////////////////////////////////////

let y = -7
let hasil = y > 0 ? "Angka " + y + " adalah bilangan positif" : y < 0 ? "Angka " + y + " adalah bilangan negatif" : "nol"
console.log(hasil)
console.log(`Angka ${y} adalah bilangan ${hasil}.`) //hasil lain menggunakan backstick digunakan untuk menggabungkan string dan variabel menggunakan ${}

//========================================================
let mtk = 70
let fisika = 81
let kimia = 89
let rata = (mtk+fisika+kimia)/3

if (mtk >=0 && mtk <=100 && fisika >=0 && fisika <=100 && kimia >=0 && kimia <=100){
        if (rata >= 80){
        console.log("selamat anda lulus", rata)
    } else if (rata>= 60) {
    console.log("anda lulus")
    } else{
    console.log("anda tidak lulus")
    }
    }   else   {
        console.log("anda tidak valid")
    }

//==============menghitung ganjil=========
for
(let i = 1; i <= 50; i++)
{if (i%2!==0)
    console.log(i)
}

////////////////rata rata jumlah array
let result = 0
function hitungRataRata(arr) {
for (let i = 0; i < arr.length; i++ )
    result += arr[i]
return result/arr.length
}

const arr = [2,4,6,8,10]
const rataRataArr = hitungRataRata (arr)
console.log(rataRataArr)

//////hitung huruf kapital di dalam kalimat
function hitungKapital(string){
    let hitung = 0
    let hitung2 = 0
//jawab    
for (let i = 0; i< string.length; i++){
    if(string[i]>= "A" && string [i] <= "Z"){
        hitung++
    }
}
for (let i = 0; i< string.length; i++){
    if(string[i]>= "a" && string [i] <= "z"){
        hitung2++
    }
}
return ([`Kapital ${hitung}`,`kapital ${hitung2}`])
}
const string1 ="Hi ManiEezZ"
const string2 = "Owi Kun"
console.log(hitungKapital(string1))
console.log(hitungKapital(string2))

//versi dengan pakai upercase
function hitungKapital2(string){
    let hitung1 = 0
//jawab    
for (let i = 0; i< string.length; i++){
    if(string[i] === string[i].toUpperCase() && string [i] !== " "){
        hitung1++
    }
}
return hitung1
}
const string3 ="Hi ManiEezZ"
const string4 = "Owi Kun"
console.log(hitungKapital(string3))
console.log(hitungKapital(string4))