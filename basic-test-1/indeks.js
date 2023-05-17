
//==============================================================
 
for (let index = 0; index < 5; index++) {
    q1=""
    q2=""
    for (let index1 = 0; index1 < index ; index1++) {
    q1=q1+" "
    q1=q1+"*"
    }
    for (let index2 = 5; index2 > index ; index++) {
    q2=q2+" "
    q2=q2+"-"
    }
    console.log(q1)+console.log(q2)                               
}
// var q2=""
// for (let index = 0; index < 5; index++) { 
//     for (let index1 = 5; index1 > index; index1--) {
//     q2= q2+" "
//     q2= q2+"*"
//    }    
//    q2 +="\n"
// }
//    console.log(q2)
