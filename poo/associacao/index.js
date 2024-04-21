const Address = require('./Address');
const Person = require("./person");

const addr = new Address('7 de Setembro', 92, 'Centro', 'São Fidélis', 'RJ')
const john = new Person('John Doe', addr)

console.log(john)
console.log(john.address.fullAddress())

//* veja que em node index.js ,, foi juntado a class person com adress