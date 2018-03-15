const helloworld = require('./helloworld');
const helloworld1 = require('./helloworld');

console.log("Created two variables from helloworld.js");
console.log("helloworld: " + helloworld.get());
console.log("helloworld1: " + helloworld1.get());
console.log('-------Reassign value of helloworld---------');
helloworld.changeHelloWorld('I am a new helloworld now!!');
console.log("helloworld: " + helloworld.get());
console.log("helloworld1: " + helloworld1.get());