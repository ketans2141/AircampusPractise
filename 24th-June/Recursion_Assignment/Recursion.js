// Print all the numbers in the given range. 

function numberRange(num1,num2){
    if(num1<=num2){
        console.log(num1);
        numberRange(num1+1,num2);
    }
}
numberRange(1,10);

// Print all the numbers in descending order in the given range 

function numberDescending(num1,num2){
    if(num1>=num2){
        console.log(num1);
        numberDescending(num1-1,num2);
    }
}
numberDescending(10,1);


// Print all the even numbers in the given range using recursion

function evenNumbers(num1,num2){
    if(num1<=num2){
        if(num1%2==0){
            console.log(num1);
        }
        evenNumbers(num1+1,num2);
    }
}
evenNumbers(1,10);


// Find the factorial of a given number n. 

function facto(num1,fact){
    if(num1>=1){
        fact=fact*num1;
        return facto(num1-1,fact);
    }
    return fact;
}
console.log(facto(4,1));
  