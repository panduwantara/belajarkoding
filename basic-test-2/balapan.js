const readline = require('readline')

class Car {
  constructor(icon, minSpeed, maxSpeed) { //masukkan parameter untuk mobilnya
    this.icon = icon
    this.minSpeed = minSpeed
    this.maxSpeed = maxSpeed
    this.currentSpeed = 0
    this.distanceTraveled = 0
  }

  accelerate() { //method untuk menentukan kecepatannya
    this.currentSpeed = Math.floor(Math.random() * (this.maxSpeed - this.minSpeed + 1)) + this.minSpeed
  }//menghitung selisih dari max dan min trus ditambah 1, min selanjutnya untuk menambahkan kecepatan minimal
  //matchfloor berguna untuk membulatkan angka acak ke bilangan bulat terdekat

  move() {
    this.distanceTraveled += this.currentSpeed
//distance travel harus bertambah biar bergerak menggunakan hasil dari perhitungan curent speed
  }
}

const rl = readline.createInterface({
  input: process.stdin, //buat nerima input
  output: process.stdout //buat output
})
//function buat meminta inputan dari user
function prompt(question) {
  return new Promise((resolve, reject) => {
    rl.question(question, answer => {
      resolve(answer)
    })
  })
}
//masukkan inputan user
async function start() {
  const trackLength = parseInt(await prompt("Input panjang track : "))
  const numCars = parseInt(await prompt("Input jumlah mobil : "))
  const cars = [];

  for (let i = 0; i < numCars; i++) {
    const icon = await prompt(`Input icon mobil ke-${i + 1} :`)
    const minSpeed = parseInt(await prompt(`Min kecepatan : `))
    const maxSpeed = parseInt(await prompt(`Max kecepatan : `))
    cars.push(new Car(icon, minSpeed, maxSpeed))
  }

  let finish = false //membuat skenario selesai
  while (!finish) { //!digunakan untuk melakukan negasi pada boolean
    for (let i = 0; i < numCars; i++) {
      const car = cars[i]
      car.accelerate()
      car.move()
      let j = 0
      if (car.distanceTraveled > trackLength){ j = 0
      }else{
        j = trackLength - car.distanceTraveled
      }

      let track = "=".repeat(car.distanceTraveled - 1) + car.icon + "=".repeat(j) //menambah track dengan ikon mobil
      console.log(track)//mengeluarkan track dengan icon mobil

      if (car.distanceTraveled >= trackLength) {
        finish = true
        break //jika hasil distance sudah sama dengan panjang track maka loopnya akan berhenti
      }
    }
    await prompt(``)//triggrer, jika tidak dijalankan akan tetap diam menunggu
  }
  rl.close()
  console.log(`Finish`)
}
start()
