let nums=[1,3,6,3,8];
console.log(nums[0],nums[4]);


let num= new Array(1,3,2,5,4,7,6);
console.log(num[0],num[5],num)


let words=['Amit','Ketan','Prashant','Shweta','Sameer','Parikshit'];
console.log(words[0],words[1],words[4]);


let chars=[2,5,1,4,7,8,3];
console.log(chars[1],chars[4],chars[chars.length-1])


let nos=[1,3,6,3,8,9,7,5];
console.log(nos[0],nos[4],nos);


let empty=[];
console.log(empty);


let values=[1,4,5,2,3,7];

// Length=values.length;

for(i=0 ; i < values.length ; i++){
    console.log(values[i]);
}



// Adding eleement to an array 


let addElement=[1,4,2,7,8];
console.log('initial',addElement);
addElement.push('adding',"Ketan");
console.log(addElement);
addElement.pop('Ketan');
console.log(addElement);


// Removing element from  an array 

let removeElement=[1,4,6,3,'Ketan','Shetge'];
console.log('initial',removeElement);
console.log(removeElement.pop());
removeElement.pop('Shetge');
console.log('popping',removeElement);



// To calculate length of array 

arrayLength=[1,3,2,5,6,'Ketan'];
console.log('Array length is',arrayLength.length);
