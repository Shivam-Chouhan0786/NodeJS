var http = require("http");
var fs = require("fs");
var url = require("url");

var serverInstance = http.createServer((request,response)=>{
    response.writeHead("200",{'content-type':'text/html'});
    var data1 = url.parse(request.url,true).query;
    response.write("sum : "+(parseInt(data1.a)+parseInt(data1.b)));
   console.log(data1);
   
    response.end();
});

serverInstance.listen('3000',()=>{
    console.log("Server connection successfull");
});



// http://localhost:3000/home?a=67&b=121 //url for enterning data using URL