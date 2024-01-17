//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

const { print, gets, getMessage, getAmount } = require('./functionsAux')

// Solicita ao usuário o tipo de magia
const typeMagic = gets();

// Solicita ao usuário a quantidade de vezes que a magia será usada
const amount = getAmount();

// Obtem a mensagem correspondente ao tipo de magia
const message = getMessage(typeMagic);

print(`Tipo de magia: ${typeMagic}`)
print(`Quantidade: ${amount}`)
print(" ")

// É impresso a mensagem a quantidade de vezes especificada:
for (let i = 0; i < amount; i++) {
  print(message);
}