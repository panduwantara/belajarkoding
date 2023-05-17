let segitiga = ''
let tinggi = 7
for(let h = 0; h <= tinggi; h++){
 for(let i = 1; i <= tinggi - h; i++){
  segitiga += ' '
 }
 for(var j = 1; j < 2 * h; j++){
  segitiga += '*'
 }
 segitiga += '\n'   
}
console.log(segitiga)