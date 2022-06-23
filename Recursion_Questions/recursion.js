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

