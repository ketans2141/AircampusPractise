// var numbers = [1,2,3,4,5,6,7,8];
// numbers.forEach(function(element, index, array){
//     array[index] = element* element;
// });
// console.log(numbers);


// function square(arr) {

//     str= [];

//     for (var i = 0; i < arr.len; i++) {
//         str.push(arr[i] * arr[i]);
//     }

//     return str;     
// }
// console.log(square([1,2,3,4]));


function square(arr){
    let sqr=arr.map(num=>num**2);
    return sqr;
}
console.log(square([1,2,3,4,5]));


// function goodManager(arr){
//     return arr.map(function incSal(Sal){
//       return Sal+1000;
//     })
//     }
//     console.log(goodManager([1000,2000,3000]));