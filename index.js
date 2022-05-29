const faker = require("faker");
faker.locale = "pt_BR";

// Exemplos de uso:

var randomName = faker.name.findName(); // Caitlyn Kerluke
console.log(randomName); 

var randomEmail = faker.internet.email(); // Rusty@arne.info
console.log(randomEmail); 

var randomCard = faker.helpers.createCard(); // random contact card containing many properties
// console.log(randomCard); 