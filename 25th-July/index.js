// objects 

let person={
    name:"Ketan",
    age:"22",
    city:"Mumbai",
    marks:{
        english:75,
        maths:70,
    }
}

// adding new property 
person.country="India";
console.log(person);

// delete property
delete person["country"];
console.log(person);

// changing existing property 
person.age=23;
console.log(person);

// extracting keys from objects 
obj=Object.keys(person);
console.log(obj);

// extracting values from objects 
obj=Object.values(person);
console.log(obj)

// extracting key and values both from objects 
obj=Object.entries(person);
console.log(obj)

// extracting all key value from object 

for(let value in person){
    console.log(value,person[value])
}

// // object destructuring 

let {name,age,city,marks}=person;
console.log(age,city,name,marks);

// // =========================================
// shallow copy 
let obj1={
    name:"Ketan",
    age:22,
    city:"Mumbai",
}

// let obj2=Object.assign({},obj1);        
let obj2={...obj1}
obj2.lastname="Shetge";
console.log(obj1)
console.log(obj2)


//Deep copy 

let obj3={
    name:"Ketan",
    age:22,
    city:"Mumbai",
    education:{
        stream:"BSC",
        percentage:70
    }
}

let obj4=JSON.parse(JSON.stringify(obj3));
obj4.name="Sumit"
console.log(obj3);
console.log(obj4);



