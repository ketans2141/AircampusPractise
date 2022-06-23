// Fibonacci using recursion 

function fibo(first, second, counter){
    if(counter <=10){
        let c=first+second;
        return fibo(second,c,counter+1);
    }
    console.log(first);
}
fibo(0,1,1);

// Given a number n, print numbers from 1 to n using recursion.

function number(num1,num2){
    if(num1<=num2){
        console.log(num1);
        return number(num1+1,num2);
    }
}
number(1,10);


// Given a number n, print numbers from n to 1 using recursion.

function number(num1,num2){
    if(num1>=num2){
        console.log(num1);
        return number(num1-1,num2);
    }
}
number(10,1);


// Print factorial of a number using recursion.

function facto(num,fact){
    if(num>0){
        fact=fact*num;
        return facto(num-1,fact);
    }
    return fact;
}
console.log(facto(5,1));


// Write a Javascript program to count the number of digits a given number has using recursion.

function numberDigit(num,count){
    if(num>0){
        count=count+1;
        num=Math.floor(num/10);
        return numberDigit(num,count);
    }
    return count;
}
console.log(numberDigit(12345,0));



// Convert a given decimal number to binary using recursion.

// function decimalToBinary(num){
//     if(num>0){
//         let digit=Math.floor(num%2);
//         return decimalToBinary(Math.floor(num/2))+digit;

//     }
// }
// console.log(decimalToBinary(10));



// Given a number n, print all the even numbers from n to 1 using recursion. 

