// Hello World Program
console.log("Hello World");

//Addition of two numbers
let a=5;
let b=6;
c= a+b;
console.log(c);

//Squareroot of number
let s=64;
r=Math.sqrt(s);
console.log(r);

// numbers from 1-10
for(i=1; i<=10;i++){
    console.log(i);
}

//print even numbers from 1-20
let a1=1 ;
let b1=20;
for(let i=a1;i<=b1;i++){
if(i%2==0){
    console.log(i);
}
}

// sum of Even numbers from 1-20
let sum=0;
for(i=1;i<=20;i++){
    if(i%2==0){
        sum=sum+i;
    }
}
console.log("sum of Even numbers from 1-20 is :" + sum);

//Print numbers from 20-1
for(i=20; i>1; i--){
    console.log(i);
}

//print sum of natural numbers from 1-20
let sum1=0;
for(i=1; i<=20;i++){
    sum1=sum1+i;
}
console.log("sum of natural numbers from 1-20 is : " + sum1);

// print the table of 5
let t=5;
for(i=1;i<=10;i++){
    console.log(t*i);
}

//print odd numbers from 1-20
for(i=1; i<=20;i++){
    if(i%2!==0){
        console.log(i);
    }
}

///return the factorial of 7
let f=7;
let fact=1;
for(i=f; i>=1;i--){
    fact=fact*i;
}
console.log("factorial of 7 is :"+ fact);

/// print "YES" if the integer is prime and "NO" if it is not.
let x= 3;
let check=true;
for(let i=2; i<x; i++){
    if(x%i==0){
        check=false;
    }
}
if(check==true){
    console.log("Yes");
}
else{
    console.log("No");
}