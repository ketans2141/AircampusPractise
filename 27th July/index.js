// reverse the array 
// let arr=[1,3,6,3,7];
function rev(arr){
    let reversed=[];
    for(let i=arr.length-1,j=0;i>=0;i--,j++){
        reversed[j]=arr[i];
    }
    return reversed;
}
console.log(rev([1,3,6,3,7]));