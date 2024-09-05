// Examples based on callback

function getResult(a,b,callback){
    setTimeout(()=>{
        callback(a+b);
    },1000);
}

function addition(res){
    console.log("Result : ",res);
}

getResult(100,2010,addition);