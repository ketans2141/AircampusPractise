function hello(name,city,age){
    console.log(`Hello , ${name} I'm from ${city} and my age is ${age}`);
}
hello("Ketan","Mumbai",22);

// ---------------------------------------------------------------------------

function mul(a,b){
    return a*b;
}
let ans=mul(2,3);
console.log(ans)

// ----------------------------------------------------------------------------

function add(a,b){
    return a+b;
}
console.log(add(1,2));

// --------------------Default parameter---------------------------------------------
// ---------------Doubt in passing values to parameters 

function sub(a,b=5){
    return a-b;
}
console.log(sub(10));

// ---------------------------------Function Expression---------------------------------------

let Add=function(a,b){
    return a+b;
}
console.log(Add(5,6));

let Even=function eve(a,b){

    for(i=a;i<=b;i++){
        if(i%2==0){
            console.log(i);
        }
        
    }
}
console.log(Even(2,10));

// ---------------------------------------Arrow Function ----------------------------------------

let myMultiply= (x,y) => {
    return x*y;

}
console.log(myMultiply(4,5));

//  for single statement 

let myMultiplication = (x,y)=>x*y;
console.log(myMultiplication(2,4));

// ------------------------------------------------------------------------------------

let Odd= (a,b)=>{
    for(i=a;i<=b;i++){
        if(i%2!=0){
            console.log(i)
        }

    }

}
console.log(Odd(2,10));

// -----------------------------------------------------------------------------------------

// Find 12th digit of Fibonacci series using recursion 

function fibonacci(num){
    if(num==0){
        return 0;
    }
    else if(num==1){
        return 1;
    }
    else{
        return fibonacci(num-1)+fibonacci(num-2);
    }
}
console.log(fibonacci(12));



// // factorial of a number using recursion 

function fact(num,facto){
    if(num>0){
        facto=facto*num;
        return fact(num-1,facto);
    }
    return facto;
}
console.log(fact(5,1));
