// let person={
//     fname:"Ketan",
//     lname:"Shetge",
//     age:22,
//     city:"Mumbai"
// }
// //Extracting specific values

// // console.log(person.fname);
// // console.log(person['age']);


// for(let key in person){
//     console.log(key);
// }


// let createEmp={
//     empName:"Tushar",
//     empId:2141,
//     empAdd:"Mumbai",
// }

// // extracting all key value pairs 

// for(let emp in createEmp){
//     console.log(emp,createEmp[emp])
// }


let teacher={
    job:"teaching",
    location:"school",
    dream:"career building",
    experience:"4 years"
}
// for extracting keys 
let teacherkeys= Object.keys(teacher)
console.log(teacher);

// for extracting values 
let teachervalues=Object.values(teacher)
console.log(teachervalues);

// for extracting both keys and values 
let properties= Object.entries(teacher)
console.log(properties);