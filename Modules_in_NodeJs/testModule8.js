var myObj = require("./module8.js");
console.log(myObj);

/*
    output : 
    {
        id: 101,
        name: 'Andrew Anderson',
        address: { city: 'Indore', state: 'MP', country: 'India' },
        info: [Function: info]
    }
*/
console.log(myObj.info("EmployeName"));
console.log("Id : "+myObj.id);
console.log("Name : "+myObj.name);
console.log("Address");
console.log(" City : "+myObj.address.city);
console.log(" State : "+myObj.address.state);
console.log(" Country : "+myObj.address.country);

