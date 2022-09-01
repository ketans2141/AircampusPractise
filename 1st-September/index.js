// call
let myNmae={
    fname:"Ketan",
    lname:"Shetge"
}
let fullName=function(hometown){
    console.log(`My name is ${this.fname} ${this.lname} and I'm from ${hometown}`)
}
fullName.call(myNmae,"Mumbai");

// apply
let parentsName={
    fname:"Vilas",
    lname:"Shetge"
}

let parentFullName=function(hometown,state){
    console.log(`My name is ${this.fname} ${this.lname} and we belong to ${hometown} ${state}`);
}
parentFullName.apply(parentsName,["Devgad","Maharashtra"])