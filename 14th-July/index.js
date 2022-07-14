// spread operator 
// Extract the values from the array 

// let n1=[1,2,3];
// let n2=[5,6,7];
// let n3=[9,10,11];

// console.log([...n1,'Ketan',...n2,...n3])


// shallow copy 
// let num1=[1,2,3];
// // console.log(num1)
// let num2=[...num1];

// num2[0]=5;
// console.log(num1,num2);


// template literals 

// let fname="Ketan";
// let lname="Shetge";

// console.log(`"${fname}" '${lname}'`)


// strings are immutable 

// let fname="Ketan";
// fname[0]="V";
// fname="Shetge";
// console.log(fname);


// printing all the characters of string 

// let fname="Ketan"

// for(i=0; i<fname.length; i++){
//     console.log(fname[i]);
// }


// extracting ketan 

let name="KetanShetge";
console.log(name.slice(0,5));

// charAt method
// if the index value exceeds it gives blank space

let fname="Ketan";
console.log(fname.charAt(2));