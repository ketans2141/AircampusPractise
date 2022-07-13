// arr=[2,5,10,7,5];
// let rev=[];
// for(let i=arr.length-1; i>=0; i--){
//     rev.push(arr[i]);
    
// }
// console.log(rev);

// function rev(arr){
//     let reverse =[];
//     for(let i=arr.length-1;i>=0;i--){
//         reverse.push(arr[i]);
//     }
//     return reverse;
// }
// console.log(rev([2,5,1,3]));



// let x="Sumit";
// let y=x;
// y="Singh";
// console.log(y);


// let obj={
//     name:"Ketan"
// };

// let user=obj;
// user.name="Shetge";

// console.log(obj);

// object assign 

// let obj={ name:"Ketan"};

// let user=Object.assign({},obj);
// user.name="Shetge";

// console.log(obj);
// console.log(user);

// let obj={ name:"Ketan"};

// let user={...obj};      //Destructuring
// user.name="Shetge";

// console.log(obj);
// console.log(user);





// let obj={
//     name:"Ketan",
//     details:{
//         id:1234,
//         city:"Mumbai"

//     }
// };

// let user=JSON.parse(JSON.stringify(obj));
// user.details.id=4567;

// console.log(obj);



// 2D Array Basics 

let matrix=[
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
]

let rows=matrix.length
// console.log(rows);

let cols= matrix[0].length;
// console.log(cols);
let sum=0;
for(let i=0;i<rows;i++){
    for(let j=0;j<cols;j++){
        if(i==j){
        sum= sum+ matrix[i][j];

        }
    }
}
console.log(sum);

// i=0    j=0,1,2,3,4    sum=1,3,6,10

//i=1      j=0,          sum=


let array=[
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
]

let row=array.length;
let col=array[0].length;

let add=0;

for(let i=0; i<row; i++){
    add=add+array[i][i];
}
console.log(add);