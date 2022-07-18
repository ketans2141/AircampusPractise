let arr=[2, 'ADD_BEG', 3, 'ADD_BEG', 'REM_BEG', 4, 'ADD_END'];

let array=[];
for(let i=0;i<arr.length;i++){
    if(arr[i]=='ADD_BEG'){
        array.unshift(arr[i-1])
    }
    if(arr[i]=='ADD_END'){
        array.push(arr[i-1])
    }
    if(arr[i]=='REM_BEG'){
        array.shift();
    }
    if(arr[i]=='REM_END'){
        array.pop();
    }
}
console.log(array);