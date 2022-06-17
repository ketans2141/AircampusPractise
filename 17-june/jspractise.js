// Hello World Program
console.log("Hello World");


// Celsius to Fahrenheit
let a=35;
let x= a*(9/5)+32;
console.log("35 celsius to Fahrenheit is :"+x);



// Average num

let a1=12;
let a2=10;
let a3=5;
let a4=8;
let a5=6;
let avg=((a1+a2+a3+a4+a5)/5);
console.log("The average num is :"+avg);


// Fahrenheit to Celsius

let f=20;
let c=(f-32)*(5/9);
console.log("20 Fahrenheit to Celsius is :"+c)


// Sum of given number 
let s=24;
// let sum=0;
let s1=s%10;
let s2=Math.floor(s/10);
let sum=s1+s2;
console.log("The sum of given number is :"+sum);

// natural numbers from 1-20

for(let i=1; i<=20; i++){
    console.log(i);
}


// cube of a number 

let c1=2;
 let cube= c1**3;
 console.log("The cube of a number is : "+cube);

//  square of a number 

let num=5;
let sq=num**2;
console.log("The square of a number is : "+sq);

// Swapping of two numbers 

let num1=20;
let num2=30;
let swap=num1;
num1=num2;
num2=swap;
console.log("The swapping of two numbers is :"+num1+" "+num2);

// Find profit 

cp=100;
sp=130;
profit=sp-cp;
console.log("The profit is :"+profit);

// Area of circle 

radius=5;
area=Math.PI*radius**2;
console.log("The area of circle is : "+area);

// area of rectangle

let l=10;
let b=20;
let area1 = l*b;
console.log("The area of rectangle is :"+area1);

// calculate percentage 

 let marks=80;
 let total=100;
 let percentage=marks/total*100;
 console.log("The percentage is :"+percentage);

//  Positive and negative

let num3=10;
let num4=20;
if(num3>0 && num4>0){
    console.log("Both are positive");
}
else{
    console.log("Both are negative");
}

// Greatest number 

let num5=20;
let num6=30;
if(num5>num6){
    console.log("The greatest number is :"+num5);
}
else{
    console.log("The greatest number is :"+num6);
}

// Even numbers from 1-20 

for(let i=1; i<=20;i++){
    if(i%2==0){
        console.log(i);
    }
}

// odd numbers from 1-20 

for(let i=1; i<=20;i++){
    if(i%2!=0){
        console.log(i);
    }
}