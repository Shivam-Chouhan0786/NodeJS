// program

var http = require("http");
var serverInstance = http.createServer((request,response)=>{

    response.write("This is an example of http module\n");
    response.write("<h1>This is an Heading</h1>");

    response.end();
});

serverInstance.listen("3000",()=>{
    console.log("Server connection succesfull on port no. http://localhost:3000");
});