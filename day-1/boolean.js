//var
var nama = "bodrex"
console.log(nama)

//var angka
var angka = 12
console.log(angka)

//boolean
let a = 10
let b = 5
let cekNilai =a>b
console.log(cekNilai)

//array
let array = ["ridwan", "fadhel"]
console.log(array[0],array[1])

//object
//curly braket tetap ikut untuk menampilkan tipe data apa
let orang = {
    nama : "shinta",
    umur : 21,
    hobby : "masak"
}
let orangKedua = {
    nama : "shinta",
    umur : 21,
    hobby : "judi",
    kontak :
    {
    no : 09273662565,
    email : "akusahs@d.vom"   
    }
}
console.log(orangKedua.kontak.no,orang.nama)

//null
let orang1
orang1 =null
console.log(orang1)

//parseInt
//mengubah string ke integer
let angka1 = "12345"
console.log(angka1)
console.log(parseInt(angka1))

//parseFloat() //merubah dari pecahan ke angka bulat
let angka2 = "134,7"
console.log(angka2)
console.log(parseFloat(angka2))

//toString()
//mengubah integer ke string
let angka3 = "12345"
console.log(angka3)
console.log(angka3.toString())

//operator
let x = 115
let y = 5
let z = 10
let penjumlahan = x + y
let jumlahKaliBagi = (x+y)*z
console.log(penjumlahan)
console.log(jumlahKaliBagi.toString())

//operator perbandingan
let equal = 100
console.log(equal==100)

let notEqual = "sinta"
console.log(notEqual !== "sinta")

//AND && (MEMBANDINKAN 2 NILAI)
console.log(true && false)

//OR || 
console.log(true || false)

//pengecekan variabel pake function

function findUserCountry(user) {
    let country = user.address && user.address.country
    return country || "unknown"
}
    let user1 = {
        name: "Puan Maharani", age : 25,
        address: {
                city: "Tangerang ", 
                country: "Indonesia",
        }
    }
    let user2 = {
        name: "Mega",
        age:    30,
}
console.log(findUserCountry(user1))
console.log(findUserCountry(user2))
