// Fibonacci using recursion 

function fibo(first, second, counter){
    if(counter <=10){
        let c=first+second;
        return fibo(second,c,counter+1);
    }
    console.log(first);
}
fibo(0,1,1);

// print all the numbers between given range 

function number(num1,num2){
    if(num1<=num2){
        console.log(num1);
        return number(num1+1,num2);
    }
}
number(1,10);