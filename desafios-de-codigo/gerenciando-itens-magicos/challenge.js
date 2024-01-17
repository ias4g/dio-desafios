//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

const { gets, print } = require('./functionsAux')
const { ItemMagico } = require('./ItemMagico')

// Solicita ao usuário para digitar o tipo do item mágico, o dano no item e a resistência do item
const { type, damage, resistance } = gets();

//TODO: Crie o de um objeto ItemMagico personalizado com base no tipo escolhido
const itemMagic = new ItemMagico(type, damage, resistance)

// TODO: Imprima os atributos do item personalizado
print("Tipo: " + itemMagic.type);
print("Dano: " + itemMagic.damage);
print("Resistencia: " + itemMagic.resistance);

// Calcula e imprime o dano causado pelo item personalizado em um combate simulado
const danoTotal = itemMagic.calcularDano();
print("Dano em combate: " + danoTotal);