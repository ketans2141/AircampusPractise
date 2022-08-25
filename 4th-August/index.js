// first index 

// function firstIndex(arr,num){
//     for(let i of arr){
//         if(arr[i]==num){
//             return i;
//         }
//     }
// }
// console.log(firstIndex([1,2,3,4],4))

// reverse array 

function reverse(arr){
    let reversed=[];
    for(let i=arr.length-1;j=0,i>=0;i--,j++){
        reversed[j]=arr[i];
    }
    return reversed;
}
console.log(reverse([3,2,1,5]));

