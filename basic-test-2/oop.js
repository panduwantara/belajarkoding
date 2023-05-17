//membuat class dengan properti dan metode
class person{
     constructor(name,age){
        this.name = name
        this.age = age
     }


sayHello(){
    console.log(`Hello, my name is ${this.name} and im ${this.age} yeras old`)
    }
}

// membuat intance dalam class
const john = new person('john', 25)

//mengakses properti dari instance
console.log(john.name) //output john

//memanggil metode dari instance
john.sayHello() //output my name bla bla bla

//inheritance
class developer extends person {
    constructor(name, age, programinglanguage){
        super(name, age)
        this.programinglanguage = programinglanguage
    }
sayHello(){
    console.log(`hello im a developer, my name is ${this.name} and im ${this.age} years old.`)
}
writeCode(){
    console.log(`im writing ${this.programinglanguage} code.`)

}
}
const johnDev = new developer(`john`, 25, `skrip jawa`)
johnDev.sayHello() //outuput hello bla bla bla
johnDev.writeCode() //output im writing jawa