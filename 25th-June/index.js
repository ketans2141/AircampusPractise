// function greet(){
//     console.log("Hello");
   
// }

// function hello(){
//     console.log("Hello Ketan");
// }
// greet();
// hello();
// greet();
// greet();

// function sub(eng,maths,sci){
//     let sum= eng+maths+sci;
//     return sum;
// }
// let total=sub(80,70,90);
// console.log(total);

// function hello(fname,lname){
//     console.log("Hello "+ fname+" "+lname);
// }
// hello("Ketan", "Shetge");

// hello("Prashant","Deshmukh");
// hello("Amit","Kumar");

// function add(a,b){
//     console.log(a+b);
// }
// add(2,4);
// add(3,6);
// add(7,6);

// let sum= function(a,b){
//     console.log(a+b);
// }
// let c=sum(5,6);
// // console.log(c);




// function hello(){
//     console.log("Hello World");
// }
// hello();

// function greet(){
//     console.log("Hello AirCampus");
// }
// greet();
// greet();
// hello();
// greet();
// greet();
// hello();


// var x= function(a,b){
//     // console.log(a*b);
//     return a*b;
// }
// let z=x(3,6);
// console.log(z);
// hello();
// function hello(){
//     console.log("Hello world");
// }
// hello();
// hello();
// hello();
// hello();

// function hello(fname,lname){
//     console.log("Hello " +fname+ " " +lname);
// }
// hello("Ketan", "Shetge");

// add(2,2)
// function add(a,b){
//     console.log(a+b);
// }
// add(4,6);
// add(9,2);
// add(3,4);



// hello();



// var x=function(){
//     console.log("Hello Ketan");
// }
// x();


// var product= function(a,b){
//    return a*b;
// }
// total=product(2,4);
// console.log(total);

// greetEveryone();
// function greetEveryone(){
//     console.log("Hello Everyone")
// }
// greetEveryone();
// greetEveryone();
// greetEveryone();
// greetEveryone();


// console.log("Hello World");
// console.log("Hello World");

// console.log("Hello World");

// console.log("Hello World");
// console.log("Hello World");
// console.log("Hello World");

// function hello(fname,lname){
//     console.log("Hello "+fname +" "+ lname)
// }
// // hello("Ketan","Shetge");
// add(4,3)
// function add(a,b){
//     console.log(a+b);
// }
// add(2,4);
// add(3,5);
// add(2,7)
// add(9,4);






// var x=function(a,b){
//     console.log(a-b);
// }
// x(6,2)


// function hello(){
//     console.log("Helllo World");
// }
// hello();
// hello();
// hello();

// hello("Prashant","Deshmukh");
// function hello(fname,lname){
//     console.log("Hello "+ fname+ " "+lname);
// }
// hello("Ketan","Shetge");
// hello("Amit","Kumar");


z(2,6);
var z =function add(a,b){
    console.log(a+b);
}
// z(2,4);



// function numberDigit(num,count){
//     //     if(num>0){
//             count=count+1;
//             num=Math.floor(num/10);
//             return numberDigit(num,count);
//         }
//         return count;
//     }
//     console.log(numberDigit(12345,0));
    
  
// factorial of given number 

function facto(num,fact){
    if(num>0){
        fact=fact*num;
        return facto(num-1,fact);
    }
    return fact;
}
console.log(facto(5,1));

// Fibbonaci using recursion 

function fibo(first, second, counter){
    if(counter <=10){
        let c=first+second;
        return fibo(second,c,counter+1);
    }
    console.log(first);
}
fibo(0,1,1);

// numbers from 1 to n 

function number(num1,num2){
    if(num1<=num2){
        console.log(num1);
        return number(num1+1,num2);
    }
}
number(1,10);
