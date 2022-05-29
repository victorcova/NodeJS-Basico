// Vamos começar importando a nossa biblioteca FAKER
const faker = require("faker");
faker.locale = "pt_BR"; // o faker precisa dessa configuração para ajuste de linguagem (para termos nomes mais brasileiros)

// Agora vamos criar uma variável para receber nomes aleatórios:
const name = faker.name.findName();
console.log(name); // vendo o resultado

// Outros exemplos:
// var randomName = faker.name.findName(); // Rowan Nikolaus
// var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
// var randomCard = faker.helpers.createCard(); // random contact card containing many properties