// spread operator 
// Extract the values from the array 

// let n1=[1,2,3];
// let n2=[5,6,7];
// let n3=[9,10,11];

// console.log([...n1,'Ketan',...n2,...n3])


// shallow copy 
let num1=[1,2,3];
// console.log(num1)
let num2=[...num1];

num2[0]=5;
console.log(num1,num2);


// template literals 

let fname="Ketan";
let lname="Shetge";

console.log(`"${fname}" '${lname}'`)