// find min value 

function findMin(arr){
    let min=arr[0];
    for(let i=0;i<arr.length;i++){
        let value= arr[i];
        if(value<min){
            min=value;
        }
    }
    return min;
}
console.log(findMin([4,2,8,1,9]))