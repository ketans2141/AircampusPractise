// Write a program to print all the digits of a number 

let num=2346;
while(num>0){
    let digit=num%10;
    num=Math.floor(num/10);
    console.log(digit);

}

// write a factorial of a number 

// let num1=6;
fact=1;
for(i=6; i>0; i--){
    fact=fact*i;
    
}
console.log(fact);


// Write a program to print the fibonacci series 

let a=1;
let b=1;
for(i=0;i<=10;i++){
    let c=a+b;
    a=b;
    b=c;
    console.log(a);
   
}

// write a program to check whether number is prime or not 

let number=7;
if(number%2!=0){
    console.log("The given number is Prime number");
}
else{
    console.log("The given number is not a prime");
}


// For number from 1 to 100 if number is divsible by 3 print "Hello", divisible by 5 Print "World" if divisible by 15 print "Hello World" else print number itself 

let number1= 30;

if(number1%15==0){
    console.log("Hello World");
}
else if(number1%5==0){
    console.log("World");
}
else if(number1%3==0){
    console.log("Hello");
}
else{
    console.log(number1);
}

// check whether number is perfect or not 

let num1=6;
let sum=0;
for(i=1;i<=num1/2;i++){
    if(num1%i==0){
        sum=sum+i;
    }
    if(sum==num1){
        console.log(sum+ " is a perfect number ");
    }
    else{
        console.log(sum+ " is not a perfect number");
    }

}


// check whether the given number is pallindrome or not 

let num2=505;
let temp=num2;
let sum1=0;
while(temp>0){
    let digit=temp%10;
    sum1=sum1*10+digit;
    temp=Math.floor(temp/10);
}
if(num2==sum1){
    console.log(num2+ " is a pallindrome");
}
else{
    console.log(num2+ " is not a pallindrome");
}



   