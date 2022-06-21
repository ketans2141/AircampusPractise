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



