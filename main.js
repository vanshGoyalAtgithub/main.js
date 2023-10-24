class Person{
    constructor(fname,lname,dob){
        this.fname =fname;
        this.lname = lname;
        this.dob = new Date(dob);

    }
    getbirthYear(){
        return this.dob.getFullYear;

    }
    getFullname(){
        return this.fname+" "+this.lname;
    }
}
const person  = new Person('van',"go","12-3-2005")
console.log(person.getFullname())
