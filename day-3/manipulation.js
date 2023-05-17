//manipulasi function
const ages = [5,10,18,20,21,25,27,30];
function checkAge(age) {
    return age > 18
}
console.log(ages.findIndex(checkAge))//buat mencari indeks dalam suatu array, dan mencetak data yang pertama dicek

console.log(ages.find(checkAge)) //mencetak data yang pertama dicek
console.log(ages.filter(checkAge)) //mencetak semua data yang dicek


//buah buahan hahahhahahaha
const fruits = ["banana","orange","apple","mango"];
fruits.fill("kiwi", 1,2) //untuk mengganti nilai dalam array
//angka pertama dihitung (0,1,2..), angka kedua dihitung (1,2,3..)
fruits.push("Durian","nangka")//push untuk nambahin data diakhir array
console.log(fruits)
cobaPop = fruits.pop() //pop untuk mengapus data diakhir array
console.log("pop =", cobaPop)
let cobaSlice = fruits.slice(1,2)
console.log(cobaSlice) //mengambil data dalam array dan dipisah kedalam array baru
console.log(fruits.sort()) //buat sorting data bedasarkan urutan alphabet (ascending)
console.log(fruits.reverse()) //buat sorting data bedasarkan urutan alphabet (descending)

fruits.forEach(function(fruit){
    console.log(`buah : ${fruit}`)
})

const buah = ["apple", "orange","cherry"]
let item = fruits.forEach(myFunction);
function myFunction (item){
    console.log("data : ", item);
}


//array multidimensi dengan tiga dimensi
const threeDimensionalArray = [//array pertama (indeks 0 warna kotak kuning)
[//array 2]
[1,2,3],
[4,5,6],
[7,8,9]
],
[ //array2
[10,20,30],
[40,50,60],
[70,80,90]
]
]
//akses elemen pada array multidimensi
console.log(threeDimensionalArray[1]) //output : [[1,2,3],[4,5,6],[7,8,9]]
console.log(threeDimensionalArray[0][1]) //output : [4,5,6]
console.log(threeDimensionalArray[0][1][2]) //output : 6

//ubah nilai pdada elemen array multidimensi
threeDimensionalArray[0][1][2] = 100
console.log(threeDimensionalArray[0][1][2]) //output 100

//===========================================================
const person = {
    nama:"john doe",
    umur: 30,
    pekerjaan: "pengembangan web",
    alamat:{
        jalan: "Jl. Raya iya",
        kota: "jakarta",
        kodepos: "12349",
    },
    hobby: ["olahraga","musik","membaca"],    
}
person.nama = "lutfi" //merubah nama
person.hobby.push("menari") //menambah hobby
console.log(person.nama)
console.log(person.hobby)

let ambilIdentitas = Object.keys(person) //ambil keys di dalam objek
console.log(ambilIdentitas)
let objectToString = JSON.stringify(person) //ubah objek ke bentuk string
console.log(objectToString)
let stringToJSON = JSON.parse('{"nama":"John doe","umur":30,"pekerjaan":"pengembangan web"}') //kebalika JSNO.STRINGFI
console.log(stringToJSON)

//Java Script Object Ni
//
let waktu = new Date ()
console.log(waktu)
console.log(waktu.getDate()) //mengambil tanggalnya doang
console.log(waktu.getMonth())
console.log(waktu.getYear())
console.log(waktu.getHours())
delete person.hobby //cara ngapus data di object
console.log(person)

//class dalam javascript
class Orang {
    constructor(nama, umur){//ngasih nilai awal ke properti objek yang dibuat
        this.nama = nama //this.nama merujuk ke nama ke objek yang kita buat, tanpa this ga bakal disimpen diobjek
        this.umur = umur
    }
    getNama(){
        return this.nama
    }
    getUmur(){ //method untuk mengambil informasi nama
        return this.umur
    }
    getAll(){
        return `Nama ${this.nama}, Umur : ${this.umur}`
    }
}
const siswa = new Orang("Owikun", 50)
console.log(siswa.getAll())
//console.log(JSON.parse(siswa.getAll()))

//parent class

class Car{
    constructor(brand){
        this.carname = brand
    }
    present() {
        return `i have a ` + this.carname
    }
}
class Model extends Car { //extend adalah method untuk mewarisi sifat class yang kita buat sebelumnya
    constructor(brand, mod){
        super(brand) //super buat manggil properti dan method yang ada di parents
        this.model = mod
    }
    show() {
        return this.present() + `, it is a ` + this.model
    }
}
myCar = new Model("Ford", "Mustang")
console.log(myCar.show())