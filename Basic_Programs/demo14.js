const myfun1 = ()=>{
    console.log("statement by setInterval");
}
const myfun2 = ()=>{
    console.log("statement by setTimeout");
}
const myfun3 = ()=>{
    console.log("statement by setImmediate");
}

console.log("Before execution");
setImmediate(myfun3,4000);
setInterval(myfun1,1000);
setTimeout(myfun2);