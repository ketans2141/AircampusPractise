let i=0;
if(i<10){
    console.log("Hello i",i);
}

for(let i=0; i<10;i++){
    console.log("Hello",i);
}


// count the number of digit 

function countDigit(num){
    let count=0;
    while(num!=0){
        let digit=num%10;
        // console.log(digit);
        num=Math.floor(num/10);
        count++;
    }
    return count;
}
console.log(countDigit(123467));


// print all the digits of a number 

function allDigits(num){
    while(num!=0){
        let digit=num%10;
        console.log(digit);
        num=Math.floor(num/10);
    }
    return num;
}
console.log(allDigits(243));


// count the number of even digits 

function evenDigits(num){
    let count=0;
    while(num!=0){
        digit=num%10;
        num=Math.floor(num/10);
        if(digit%2==0){
            count=count+1;
        }
    }
    return count;
}
console.log(evenDigits(12568))


// sum of even numbers 

function sumEven(num){
    let sum=0;
    while(num!=0){
        let digit=num%10;
        num=Math.floor(num/10);
        if(digit%2==0){
            sum=sum+digit;
        }
    }
    return sum;
}
console.log(sumEven(1256));

// sum of odd numbers 

function sumOdd(num){
    let sum=0;
    while(num!=0){
        let digit=num%10;
        num=Math.floor(num/10);
        if(digit%2!==0){
            sum=sum+digit;
        }
    }
    return sum;
}
console.log(sumOdd(3162));


// product of a even  number 

function prod(num){
    let product=1;
    while(num!=0){
        let digit=num%10;
        num=Math.floor(num/10);
        if(digit%2==0){
            product=product*digit;
        }

    }
    return product;
}
console.log(prod(1432));