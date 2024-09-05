//  Program showing the concept of events (custom event)

const { log } = require("console");
var event = require("events");
var eventEmitter = new event.EventEmitter();
//console.log(eventEmitter);

let secondHandler =function(){
    console.log("Second handler for customEvent\n");
}
eventEmitter.on("customEvent",function(){
    console.log("Here this is a listener for custom event");
});

eventEmitter.on("customEvent",secondHandler)//we can add multiple handler with one event
/*
function(){
    console.log("Here this is a listener for custom event");
}
the above function is a listener or event handler function
*/
eventEmitter.emit("customEvent"); // here customEvent is my custom event