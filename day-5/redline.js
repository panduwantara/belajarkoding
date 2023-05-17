//readline nada node.js
/** readline = sama kek argumen input
 * fungsinya buat masukin inputan ke dalem CLI */
 
//buat variabel untuk menampung modul readline tersebut dengan menggunakan requier
//createInterface() buat bikin interface yang ngebaxa input dari user
const readline = require(`readline`).createInterface({
input:process.stdin, //buat nerima input
output: process.stdout //buat output
})

//function buat minta inputan dari user
function input(prompt){
    return new Promise((callback, error)=>{
        //buat nampilin prompt di console
        readline.question(
            prompt, 
            (inputnya)=>{
                //buat close interface readline setelah user nginput
                readline.close()
                //panggil callback dengan nilai yang di inputin user
                callback(inputnya)
            })    
        })
}
//eksekusi program pake asyncronus
(async ()=> {
    try {
    //minta inputan
    const name = await input("masukan nama :")
    console.log("halo ", name)
    } catch (err) {
        console.error(err)
    }
   
})()



function asoy(asd,qwe,zxc){
    var a = asd + qwe
    

    return a
}


function calbuk(){

    
}


calbuk(()=>{console.log("a")})