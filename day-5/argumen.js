//argument input pada javasript menggunakan 'proces.agrv'

//proces.env = array yang berisi argumen2 yang kita ketik di CLI (command line)

if (process.argv.length === 2){ //jika data arraynya sama dengan 2 maka akan cetak log
    console.log("expected at least one argumen bro!")
        process.exit(1)//setelah itu program diakhiri dengan exit, kalau tidak ada exit datanya undefinied
        //bisa juga sebagai penanda kode erors (angka di dalam kurung sebagai note saja)
}
//const custom = process.argv [2] || "default"

//log yang ini untuk mencetak argumen yang udah di input
console.log(`argument text : ${process.argv[2]} ${process.argv[3]} ${process.argv[4]}`)