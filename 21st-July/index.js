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

let person={
    fname:"Ketan",
    lname:"Shetge",
    age:22,
    city:"Mumbai",
}
// to add new property to object 
person.country="India"
console.log(person)
// to change existing property 
person.age=24;
console.log(person)
//to delete property 
delete person.age;
console.log(person)

