// reverse the array 
// let arr=[1,3,6,3,7];
// function rev(arr){
//     let reversed=[];
//     for(let i=arr.length-1,j=0;i>=0;i--,j++){
//         reversed[j]=arr[i];
//     }
//     return reversed;
// }
// console.log(rev([1,3,6,3,7]));

// find max value in array 
function maximum(array){
    let max=array[0];
    for(let i=0;i<array.length;i++){
        let value =array[i];
        if(value>max){
            max=value;
        }
      
    }
    return max;
}
console.log(maximum([1,4,8,36,24]))