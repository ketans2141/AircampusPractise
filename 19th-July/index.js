// let Maharashtra={
//     city:"Mumbai",
//     place:"Dadar",
//     name:"Ketan",
// }
// console.log(Maharashtra["city"],Maharashtra.place);

// let maharashtra={
//     city:"Mumbai",
//     place:"Dadar",
//    details:{
//     name:"Ketan",
//     age:"22",
//    }
// }
// let info="details";
// console.log(maharashtra["city"],maharashtra.details.name,maharashtra["details"]);
// console.log(maharashtra[info],maharashtra[info]["age"])

// adding function inside object 
function createSquare(side1,side3){
let square={
    side1:side1,
    side2:3,
    side3:side3,
    side4:2,
    area:{
        formula:"side**2",
    },
    draw: function (){
        return "drawing circle";
    },
};
return square;
}
// console.log(square.draw())

let square1=createSquare(4,6)
console.log(square1.side1,square1.side3)