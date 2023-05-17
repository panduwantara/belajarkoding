class persegi{
    constructor(panjang){
        this.panjang = 5
    }
    present() {
        return this.panjang
    }
}
class luas extends persegi { //extend adalah method untuk mewarisi sifat class yang kita buat sebelumnya
    constructor(panjang, lebar){
        super(panjang) //super buat manggil properti dan method yang ada di parents
        this.lebar = 5
    }
    show() {
        return this.present()*this.lebar
    }
}
hasil = new luas()
console.log(hasil.show())

//==========================================================================

const namaOrang = ["danu", "deni", "rizky", "rifky", "rizieq", "ridwan"];
const cari = "a"
const hasilFilter = cariNama(namaOrang, cari)
function cariNama(namaOrang, cari) {
    const hasilFilter = namaOrang.filter(function(nama) {
    return nama.includes(cari);
    });
    return hasilFilter;
    }
    console.log(hasilFilter);


//============================================================================
// const namaLaptop = [
//     { id: 1, nama: "lenovo", harga: 15000000},
//     { id: 2, nama: "ROG", harga: 50000000},
//     { id: 3, nama: "DEK", harga: 10000000},
//     { id: 4, nama: "MSI", harga: 30000000},
// ]
// const search = (namaLaptop >= 0 && namaLaptop <=30000000)
// const filter = cariLaptop (namaLaptop, search)
// function cariLaptop(laptop, search) {
//     const filter = namaLaptop.filter(function(laptop) {
//     return laptop.includes(search);
//     })
//     return filter;
//     }
//     console.log(filter);


