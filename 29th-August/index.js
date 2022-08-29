class parent{
    constructor(fname,){
        this.fname=fname
        // this.gender=gender
    }

}
class child extends parent{
    constructor(fname,lname,age,gender){
        super(fname)
        this.gender
    }
    subChild(){ 
        return `My name is ${this.fname} and my gender is ${this.gender}`
    }
}

const result= new child("ketan","shetge",22,"male");
console.log(result);
console.log(result.subChild())


