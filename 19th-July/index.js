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

let square={
    side1:4,
    side2:3,
    side3:6,
    side4:2,
    area:{
        formula:"side**2",
    },
    draw: function (){
        return "drawing circle";
    },
};
console.log(square.draw())