// Examples based on prototypes

function Person(name,age){
    this.name=name;
    this.age=age;
}

Person.prototype.details= function(){
    console.log(`Hello mr/miss ${this.name}, your age is ${this.age}`);
}

const obj =new Person("Shivam Chouhan",20);
obj.details();


