const names = require("./04-modules/names");
const sayHi = require("./04-modules/utils");

const { john, peter } = names;
console.log(names);
console.log(john);
console.log(peter);
sayHi(names.john);
