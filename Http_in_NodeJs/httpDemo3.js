// program

var http = require("http");
var serverInstance = http.createServer((request,response)=>{
    response.write("This is an example of http module\n");


    
    // response.write(request.toString());
    // console.log(request);
    // console.log(response==requesclst);
    
    

    
    response.end();
});

serverInstance.listen("3000",()=>{
    console.log("Server connection succesfull");
});