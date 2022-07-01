// QNo 1. Print the following Pattern.
// Input
// You will be given a number n
// 1 <= n <= 100
// Output
// Print the following pattern
// Sample Output:
// For n = 5

// for(i=1;i<=5;i++){
//     let stars="";
//     for(j=1;j<=5;j++){
//         if(i==j){
//             stars=stars+" * ";
//         }
//         else if(i+j==6){
//             stars=stars+ " * ";
//         }
//         else{
//             stars=stars+"   ";
//         }
        
//     }
//     console.log(stars);
// }

// QNo 2. Print the following Pattern.
// Input
// You will be given a number n
// 1 <= n <= 100
// Output
// Print the following pattern
// Sample Output:
// For n = 5




// for(i=1;i<=5;i++){
//     let stars="";
//     for(let j=1;j<=5;j++){
//         if( (i+j)%2==0){
//             stars=stars+" *";
//         }
//         else if((i+j)==6){
//             stars=stars+" ";
//         }
//                 else{
//             stars=stars+"   ";
//         }
//     }
//     console.log(stars);
// }


// Qno 3: Print the following pattern
// Input
// You will be given a number n
// 1 <= n <= 100
// Output
// Print the following pattern
// Sample Output:
// For n = 5
// 1
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15



// let count=1;
// for(let i=1;i<=5;i++){
//     let str="";
//     for(let j=1;j<=i;j++){
//         str=str+`${count} `;
//         count=count+1;
//     }
//     console.log(str);
// }



// Qno 4: Print Fibonacci series in this order
// Input
// You will be given a number n
// 1 <= n <= 100
// Output
// Print the following pattern
// Sample Output:
// For n = 5
// 0
// 1 1
// 2 3 5
// 8 13 21 34
// 55 89 144 233 377

let a=0,b=1;
for(let i=1;i<=5;i++){
    let str="";
    for(let j=1;j<=i;j++){
        str=str+`${a} `;
        let c=a+b;
        a=b;
        b=c;
      
    }
    console.log(str);
}


// Qno 5: Print the following Pattern.
// Input
// You will be given a number n
// 1 <= n <= 10
// Also, n is odd.
// Output
// Print the following pattern
// Sample Output:
// For n = 5
//          1
//        2 3 2
//      3 4 5 4 3
//        2 3 2
//          1