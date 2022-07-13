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

let obj={ name:"Ketan"};

let user=Object.assign({},obj);
user.name="Shetge";

console.log(obj);
console.log(user);

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