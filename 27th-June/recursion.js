// Print all the numbers in the given range. 

function allNumbers(a,b){
    if(a<=b){
        console.log(a);
        allNumbers(a+1,b);
    }
    // return a;
}
allNumbers(11,20);


// Print all the numbers in descending order in the given range 

function numbers(a,b){
    if(a>=b){
        console.log(a)
        numbers(a-1,b);
    }

}
numbers(20,11);

// Print all the even numbers in the given range 

function evenNumbers(a,b){
    if(a<=b){
        if(a%2==0){
            console.log(a);
    
        }
        evenNumbers(a+1,b);
    }

}
evenNumbers(11,20);


// print all the odd numbers in given range 

function oddNumbers(a,b){
    if(a<=b){
        if(a%2!=0){
            console.log(a);
        }
        oddNumbers(a+1,b);
    }
}
oddNumbers(11,20);

// Print sum of all the numbers in the given range. 

function sumNumbers(a,b){
    if(a<b){
        // console.log(a);
        return sumNumbers(a+1,b)+a;
    }
    return a;
}
console.log(sumNumbers(1,10));


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


// Print the product of all the numbers in given range  using recursion. 
product=1;
function prodNumber(a,b){
   
    if(a<=b){
        product=product*a;
        return prodNumber(a+1,b);
    }
    return product;
}
console.log(prodNumber(1,5));




// // let fname="Ketan";
// var fname="Ketan";
// let  fname="shetge";
// console.log(fname);
// // const x=