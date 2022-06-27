// Print all the numbers in the given range. 

// function allNumbers(a,b){
//     if(a<=b){
//         console.log(a);
//         allNumbers(a+1,b);
//     }
//     // return a;
// }
// allNumbers(11,20);


// Print all the numbers in descending order in the given range 

function numbers(a,b){
    if(a>=b){
        console.log(a)
        numbers(a-1,b);
    }

}
numbers(20,11);