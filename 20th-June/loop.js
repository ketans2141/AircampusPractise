console.log("Hello World");

// using for loop 

for(i=1;i<=10;i++){
    console.log("Hello World");
}

let k=1;
while(k<11){
    console.log(k);
    k++;
}


// print even numbers from 1-10 using for loop 

for(i=1;i<=10;i++){
    if(i%2==0){
        console.log(i);
    }
}


// print even numbers from 1-20 using while loop

let j=1;
while(j<=20){
    if(j%2==0){
    console.log(j);
    }
    j++;
}


// print odd numbers from 1-10 using for loop 

for(a=1;a<=10;a++){
    if(a%2!=0){
        console.log(a);
    }
}


// print odd numbers from 1-20 using while loop

let b=1;
while(b<=20){
    if(b%2!=0){
        console.log(b);
    }
    b++;
}

// Fibonacci series using for loop 

let a1=0;
let b1=1;
for(i=0;i<=10;i++){
    console.log(a1);
    let c1=a1+b1;
    a1=b1;
    b1=c1;
}

// Fibonacci series using while loop 

let num=0;
let num1=1;
let l=0;
while(l<=20){
    console.log(num);
    let num2=num+num1;
    num=num1;
    num1=num2;
    l++;
}

