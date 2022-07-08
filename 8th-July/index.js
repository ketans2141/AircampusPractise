// ===============================Include=========================

let text= ['Hello','World','Everyone','Everything',12,15];

console.log(text.includes("world"));
console.log(text.includes('Everyone'));
console.log(text.includes(12));



// ======================indexOf=========================

let text1=['Ketan','Amit','Ketan','Sameer','Sumit']
console.log(text1.indexOf('Ketan'));
console.log(text1.indexOf('a'));
console.log(text1.lastIndexOf('Ketan'));



// =========================Concat======================

let str1=[1,4,2,5];
let str2=[1,6,2,1];
let str3=[8,9];
let str=str1.concat(str2).concat(str3);
console.log(str);



// =======================join=========================

let names=['Ketan','Sumit','Ajju','Shubham'];
console.log(names.join(' & '))


// ===============================Slice====================


let name1=['Hello','Ketan','Vilas','Shetge'];
let result=name1.slice(0,2);
console.log(result);

// =========================Filter=======================
// let array=[1,2,3,4];
// console.log(array.filter(array));




let age=[19,22,14,45,16];
let results=age.filter((age) => {
if(age>=18){
    console.log(age);
}

// console.log(age);
})




// function myFilter(num){
//     // let num=[1,2,3,4];
//     return num.filter(num);
// }
// console.log(myFilter([1,2,3,4]))


// ===========================map=========================


let num=[1,2,3,4];

let factArray = num.map((num) => {
    let fact=1;
    for(let i=num; i>0;i--){
        fact=fact*i;
    }
    return fact;
})
console.log(factArray)