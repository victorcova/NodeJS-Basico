const faker = require("faker");
faker.locale = "pt_BR";

const name = faker.name.findName();

console.log(name);