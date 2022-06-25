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


// Find the nth digit of the fibonacci series. 

function fibo(a,b,counter){
    if(counter<=10){
        let c=a+b;
        return fibo(b,c,counter+1);
    }
    console.log(a);
}
fibo(0,1,1);
  

// Print sum of all the numbers in the given range.

function sumRange(num1,num2){
    if(num1<num2){
        return num1+sumRange(num1+1,num2);
    }
    return num1;
}
console.log(sumRange(1,10));



// Print sum of all the first 10 even numbers using recursion. 

function sumEven(num,sum){
    if(num<=10){
        if(num%2==0){
            sum=sum+num;
        }
        return sumEven(num+1,sum);
    }
    return sum;
}
console.log(sumEven(1,0));



// // Print the product of all the numbers in given range  using recursion.
product=1;
function productRange(num1,num2){
    if(num1<=num2){
        product=product*num1;
        return productRange(num1+1,num2);
    }
    return product;
}
console.log(productRange(1,5));


// Write the recursive function to check whether a given number is prime or not. 

let mul = 2;
let isprime = 0;
function primeNumber(number) {
    if (mul <= number) {
        if (number % mul == 0) {
            isprime=1;
            mul++;
            return primeNumber(number);
        }
        if(isprime == 0){
            console.log("Yes It is Prime number");
        } else{
            console.log("No It is not a  Prime number");
        }
    }

}

primeNumber(17);