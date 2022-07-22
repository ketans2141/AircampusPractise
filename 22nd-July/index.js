// without using method

// --------------reverse()------------

// function rev(arr){
//     let reversed=[];
//     for(let i=arr.length-1,j=0;i>=0;i--,j++){
//         // reversed.push(arr[i])
//         reversed[j]=arr[i];
//     }
//     return reversed;
// }
// console.log(rev([1,2,6,5,6]))


// =================sort================

// function sortArr(arr){
//     for(let i=0;i<arr.length;i++){
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[i]>arr[j]){
//                 let temp=arr[i];
//                 arr[i]=arr[j];
//                 arr[j]=temp;
                
//             }
//         }
//     }
//     return arr;
// }
// console.log(sortArr([6,3,7,11,8]))


// ==============max==========

// function findMax(arr){
//     let max=arr[0];
//     for(let i=0;i<arr.length;i++){
//         let value=arr[i];
//         if(value>max){
//             max=value;
//         }
//     }
//     return max;
// }
// console.log(findMax([1,10,2,9]))

//============min===========

// function findMin(arr){
//    let min=arr[0];
//    for(i=0;i<arr.length;i++){
//     let value=arr[i];
//     if(value<min){
//         min=value;
//     }
// }
// return min;
// }
// console.log(findMin([4,1,3,5]))



// ==========indexOf========

// function firstIndex(arr,num){
//     for(let i in arr){
//         if(arr[i]==num){
//             return i;
//         }
//     }
// }
// console.log(firstIndex([1,2,4,6],4))

// function firstIndex(arr,num){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]==num){
//             return i;
//         }
//     }
// }
// console.log(firstIndex([1,2,3,6,4,6],6))


// splice 

// function removeEle(arr,){
//     for(let i=0;i<arr.length;i++){

//     }
// }

//fill

// function addValue(arr,value,start){
//     for(i=0;i<arr.length;i++){

//     }
// }


let str1="Hello"
let str2="Ketan"
console.log(`${str1} ${str2}`)
console.log(str1+" "+str2);