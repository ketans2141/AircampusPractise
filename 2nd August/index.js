function twoSum(arr,target){
    let newArr=[];
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]+arr[j]==target){
                newArr.push(i);
                newArr.push(j);
            }
        }
    }
    return newArr;
}
console.log(twoSum([2,7,11,15],9))