// -----------------------Function Practise---------------------------




// Sum of square of digits of a number

function sumOfSquareOfDigits(num){
    let sum=0;
    while(num!=0){
        let rem=num%10;
        sum=sum+rem**2;
        num=Math.floor(num/10);
    }
    return sum;
}
let ans=sumOfSquareOfDigits(1234);
console.log(ans);


// count the number of digits in a number

function countDigits(num){
    let count=0;
    while(num!=0){
        let rem=num%10;
        count++;
        num=Math.floor(num/10);
    }
    return count;
}
let ans1=countDigits(123456712312344);
console.log(ans1);

// sum of even numbers

function sumOfEven(num){
    let sum=0;
    while(num!=0){
        let rem=num%10;
        if(rem%2==0){
            sum=sum+rem;
        }
        num=Math.floor(num/10);
    }
    return sum;
}
let ans2=sumOfEven(1238649);
console.log(ans2);


  //Take two numbers and find product of all numbers between them that satisfy following condition (inclusive range):
  //-> Numbers should be even
  //-> Second last digit of number is 4

function product(a,b){
    let product=1;
    for(let i=a; i<=b; i++){
     if(i%2==0 && Math.floor(i/10)%10==4){
        product= product *i;
      }
    }
    if(product<1680)
    {
      return 0;
    }
    else{
      return product;
    }
  }
    let ans3=product(40,45);
    console.log(ans3);



    // Farhenheit to Celsius 

    function fToc(f){
        let c=(f-32)*5/9;
        return c;
    }
    let ans4=fToc(77);
    console.log(ans4);

    // Celsius to Farhenheit

    function cTof(c){
        let f=(9/5*c)+32;
        return f;
    }
    let ans5=cTof(25);
    console.log(ans5);

    // ---------------------------using arrow function---------------------------- 

    // Farhenheit to Celsius 

    let faToC=(f)=>{
        let c=(f-32)*5/9;
        return c;
    }
    let ans6=faToC(77);
    console.log(ans6);


    // addition of two numnbers 

    let add=(a,b)=>{
        let sum=a+b;
        return sum;
    }
    let ans7=add(10,20);
    console.log(ans7);

    //sum of square of digits of a number

    let sumOfSquare=(num)=>{
        let sum=0;
        for(let i=0;i<=num;i++){
            sum=sum+i**2;
        }
        return sum;
    }
    let ans8=sumOfSquare(12);
    console.log(ans8);


// check password is correct or not

let check=(num)=>{
    let pswd=12345;
    let correctpswd=2141;
    for(let i=1;i<=3;i++){
        if(num==pswd){
            return "password is correct";
        }
        else{
            return "password is incorrect";
        }
    }
}
    let ans9=check(12345);
    console.log(ans9);

// if num divsible by 3 then print "Hello" , if number divisible by 5 print "world", if number divisible by 15 print "Hello World" 

let divisible=(num)=>{
    if(num%15==0){
        return "Hello World";
    }
    else if(num%5==0){
        return "World";
    }
    else if(num%3==0){
        return "Hello";
    }
    else{
        return "not divisible";
    }
}
    let ans10=divisible(13);
    console.log(ans10);
    

// Take 3 numbers and find and return biggest of them. If all three numbers are same than print "None of them is biggest"
// if there are two numbers same as biggest than also print "None of them is biggest"

let biggest=(a,b,c) =>{
    switch(a>b && a>c){
        case true:
            return a;
            break;
        }
        switch(b>a && b>c){
            case true:
                return b;
                break;
        }
        switch(c>a && c>b){
            case true:
                return c;
        }
        switch(a==b || a==c || b==c){
            case true:
                return "None of them is biggest";
        }
}
    let ans11=biggest(10,20,30);
    console.log(ans11);