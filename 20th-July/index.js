let person={
    fname:"Ketan",
    lname:"Shetge",
    age:22,
    city:"Mumbai"
}
//Extracting specific values

// console.log(person.fname);
// console.log(person['age']);

for(let key in person){
    console.log(key);
}