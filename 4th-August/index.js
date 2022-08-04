// first index 

function firstIndex(arr,num){
    for(let i of arr){
        if(arr[i]==num){
            return i;
        }
    }
}
console.log(firstIndex([1,2,3,4],4))