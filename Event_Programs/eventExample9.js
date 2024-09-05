//  Program showing the concept of events (custom event)

const { log } = require("console");
var event = require("events");
var eventEmitter = new event.EventEmitter();
//console.log(eventEmitter);

const myEventHandler = function(){
    console.log("Here this is a listener for custom event");
}
eventEmitter.on("customEvent",myEventHandler);
eventEmitter.on("customEvent",myEventHandler);
eventEmitter.on("customEvent",myEventHandler);
eventEmitter.on("customEvent",myEventHandler);
eventEmitter.on("customEvent",myEventHandler);

eventEmitter.emit("customEvent"); // here customEvent is my custom event

let array_Listeners= eventEmitter.listeners("customEvent");
console.log(array_Listeners.length);


eventEmitter.removeAllListeners("customeEvent");
console.log(eventEmitter.listeners().length);
