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


// Mary wants to distribute pens to all the kids in her neighbourhood. Can you help her by creating an array where all the kids except her neighbour get 'm' number of pens and her neighbour kids get 'm+5'. Please note she doesn't have a kid.


let m=5;
let n=10;
let pos=2;

let newArray=[];

for(let i=0;i<n;i++){
    if(i==pos){
        newArray[i]=0;
    }
    else if(i==pos-1 || i==pos+1){
        newArray[i]=m+5;
    }
    else{
        newArray.push(m);
    }
}
console.log(newArray);