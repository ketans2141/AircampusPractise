let str="testing"
function midchar(str){
for(i=0;i<str.length;i++){
    if(str.length%2!==0){
      return str[Math.floor(str.length/2)]; 
    }
    else{
      return str[Math.floor(str.length/2)-1] + str[Math.floor(str.length/2)];
    }
  }
}
console.log(midchar("testing"))


// ================objects ===================

// let person={
//     fname:"Ketan",
//     lname:"Shetge",
//     age:22,
//     city:"Mumbai",
// }
// console.log(person)
