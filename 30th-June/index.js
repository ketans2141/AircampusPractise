// // 1
// // 2 3
// // 4 5 6
// // 7 8 9 10
// // 11 12 13 14 15

// let count=1;
// for(i=1;i<=5;i++){
//     let stars="";
//     let space=" ";
//     for(j=1;j<=i;j++){
        
//         stars=stars+`${count} `
//         count=count+1;
//     }
//     console.log(stars);
// }


// for(i=1;i<=5;i++){
//     let stars="";
//     for(j=1;j<=5;j++){
//         if(i==j){
//             stars=stars+"*";
//         }
//        else if(i+j==6){
//             stars=stars+"*";
//        }
//        else{
//         stars=stars+" ";
//        }
//     }
//     console.log(stars);

// }





// // 0
// // 1 1
// // 2 3 5
// // 8 13 21 34
// // 55 89 144 233 377




// // 1
// // 01
// // 101
// // 0101
// // 10101
// // 0101010

// for(let i=1;i<=6;i++){
//     let stars="";
//     for(let j=1;j<=i;j++){
//         if((i+j)%2==0){
//             stars=stars+ "1";
//         }
//         else{
//             stars=stars+ "0";
//         }
//     }
//     console.log(stars);
// }



// // 1
// // 23
// // 123
// // 1231
// // 23123

// let count=1;
// for(let i=1;i<=5;i++){
//     let stars="";
//     for(let j=1;j<=i;j++){
//         if(count>3){
//             count=1;
//         }
//         stars=stars+count;
//         count=count+1;
//     }
//     console.log(stars);
// }


// // 5
// // 5 4
// // 5 4 3
// // 5 4 3 2
// // 5 4 3 2 1


// for(let i=5;i>=1;i--){
//     let stars="";
//     for(let j=5;j>=i;j--){
//         stars=stars+j;
//     }
//     console.log(stars);
// }


// 5
// 4 5
// 3 4 5
// 2 3 4 5
// 1 2 3 4 5


// for(let i=5;i>=1;i--){
//     str="";
//     for(let j=i;j<=5;j++){
//         str=str+`${j} `;
//     }
//     console.log(str);
// }


//         1
//        12
//       123
//      1234
//     12345 

for(i=1;i<=5;i++){
    let str="";
    for(j=1;j<=5-i;j++){
        str=str+" "
    }
    for(k=1;k<=i;k++){
        str=str+k;
    }
    console.log(str);
}


