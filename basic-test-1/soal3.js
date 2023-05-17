class siswa1{
    constructor(name, age, gender){
        this.name = name
        this.age = age
        this.gender = gender
    }
    getData() {
        return `name : ${this.name}, age : ${this.age}, gender : ${this.gender}`
    }
}
class newSiswa extends siswa1 { 
    constructor(name, age, gender, idSiswa){
        super(name, age, gender) 
        this.idSiswa = idSiswa
    }
    getStudentInfo() {
        return this.getData() + `, ID Siswa : ${this.idSiswa}`
    }
}

const siswa2 = new siswa1("Diki Slebew", 25,"Male")
console.log(siswa2.getData())
const newSiswa2 = new newSiswa("lucinta luna", 20, "Female", "14045")
console.log(newSiswa2.getStudentInfo())