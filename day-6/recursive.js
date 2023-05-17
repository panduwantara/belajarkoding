function echo(name, number){
    if(number!==0){
        console.log(name)
        echo(name,number-1) //-1 untuk mengakhiri loop, jika tidak pakai akan infinite loop. cara bacanya dari 3-2-1
    }
}
echo("ivan",3)

//===============
function echo(number){   
        console.log(number)
        const nextNumber = number -1
        if (nextNumber > 0){
            echo(nextNumber)
        }
}
function factorial(nextNumber){
if (nextNumber === 0)
{
   return 1;
}
 return nextNumber * factorial(nextNumber-1);
}
echo(5)

function factorial(n) {
    if (n === 0) {
      return 1;
    }
  
    return n * factorial(n - 1);
  }
  let result = factorial(5);
  console.log(`hasil ${result}`)

function enol(array, baris = 0, kolom = 0, kosong = []) {
    // Basis atau kondisi terminasi recrusive
    if (baris === array.length) {// Ketika mencapai akhir baris (baris === array.length), 
    //kalau misalnya berhasil mengembalikan array kosong yang berisi semua indeks angka 0 yang ditemukan.
      return kosong;
    }
  
    if (array[baris][kolom] === 0) {//memeriksa elemen baris dan kolom, apakan nilai indeks nya 0 akan 
        //dimasukan ke parameter
      kosong.push([baris, kolom])
    }
  
    if (kolom < array[baris].length - 1) {
      return enol(array, baris, kolom + 1, kosong)
    } else  {
      return enol(array, baris + 1, 0, kosong)
    }   
}
let array = [
    [0,1,1,1,1],
    [1,1,1,0,1],
    [1,1,0,1,1],
    [1,1,1,0,1],
    [1,1,1,1,0]
  ]
let ketemuEnol = enol(array)
    ketemuEnol.forEach((index) => { //foreach untuk melooping array     
        console.log(`[${index}]`)  
    }
)  