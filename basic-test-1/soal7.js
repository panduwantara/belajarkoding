let jumlah = 2
let smartphone = "samsung"
let harga = 1909090
let total = jumlah * harga

if (harga >=0 && total >=0 && harga !=0 && total !=0){
        if (total >= 1000000){
        console.log(`
        Anda membeli ${jumlah} ${smartphone}, dengan harga ${harga} per smartphone.
        Total harga sebelum diskon adalah ${total}`)
        console.log(`
        Selamat! Anda mendapatkan diskon sebesar 10%. Harga setelah diskon adalah ${(total-(total*0.1))}`)
    } else if (total>= 500000) {
        console.log(`
        Anda membeli ${jumlah} ${smartphone}, dengan harga ${harga} per smartphone.
        Total harga sebelum diskon adalah ${total}`)
        console.log(`
        Selamat! Anda mendapatkan diskon sebesar 5%. Harga setelah diskon adalah ${(total-(total*0.05))}`)
    } else{
    console.log(`
        Maaf, anda tidak mendapatkan diskon. Harga total adalah ${total}`)
    }
    }   else   {
        console.log("harga tidak valid")
    }