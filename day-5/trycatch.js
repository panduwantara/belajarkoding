//belajar try catch pada javasript
function pembagian(angka1, angka2){
    try {
    //kalo program sukses dia bakal eksekusi blok try
            if(angka2 === 0){
                throw "gabisa dibagi 0 coy !"
            }
            return angka1/angka2
        } catch (error) {
            //klo program error dia bakal eksekusi catch
            console.error(error)
            return null
    }
}

let pembagiun = pembagian (10,2)
console.log(pembagiun)
let pembagiun2 = pembagian (10,0 )
console.log(pembagiun2)

