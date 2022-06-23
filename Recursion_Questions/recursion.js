// Fibonacci using recursion 

function fibo(first, second, counter){
    if(counter <=10){
        let c=first+second;
        return fibo(second,c,counter+1);
    }
    console.log(first);
}
fibo(0,1,1);