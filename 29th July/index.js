// sort by keys 

let obj={
    name:"Ketan",
    age:22,
    city:"Mumbai"
}

let sortedKeys=Object.keys(obj).sort();
console.log(sortedKeys);

let sortedObject={};

for(let i of sortedKeys){
    sortedObject[i]=obj[i];
}
console.log(sortedObject);

// rest operator 

// function sum(fixed,discount,...arr){
//     let total=0;
//     for(let i of arr){
//         total=total+i;
//     }
//     return total
// }
// console.log(sum(200,100,1,2,3,4,5))

