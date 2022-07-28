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


// let str="ketan"  if t is at 3rd position return true else false 

function check(str){

if(str[2]=='t'){
    return "true";
}else return false;
}
console.log(check("ketan"))


//string="My name is ketan"   check if  is present in string

function isCheck(string){
    if(string.includes("ketan"))return "Yes";
    else return "No"
}
console.log(isCheck("My name is ketan"))