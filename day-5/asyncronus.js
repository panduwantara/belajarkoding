//asyncronus
console.log("start")

setTimeout(function(){
    console.log("baris ini akan di print setelah 2 detik")
}, 2000)
console.log("selesai")


//function biasa
function greet(name) {
    console.log("halo, " + name + "!")
}

//memanggil function biasa 
greet("Andi ")

//callback
function greetUser(name, callback){
     callback(name)
}

//memanggul function callback
greetUser("Budi", greet)

//promise
fetch("https://jsonplaceholder.typicode.com/todos/90")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error))


