// Examples based on prototypes

function Person(name,age){
    this.name = name;
    this.age = age;
    this.details = function(){
        console.log("Hello "+this.name+" , your age is : "+this.age);
    }
}

const obj = new Person("shubham rajput",21);
obj.details();