// // 1
// // 2 3
// // 4 5 6
// // 7 8 9 10
// // 11 12 13 14 15

// let count=1;
// for(i=1;i<=5;i++){
//     let stars="";
//     for(j=1;j<=i;j++){
//         stars=stars+`${count} `;
//         count=count+1;
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


// 5
// 5 4
// 5 4 3
// 5 4 3 2
// 5 4 3 2 1


for(let i=5;i>=1;i--){
    let stars="";
    for(let j=5;j>=i;j--){
        stars=stars+j;
    }
    console.log(stars);
}