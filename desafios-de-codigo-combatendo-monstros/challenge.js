//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

const { gets, print, combat } = require('./functionsAux')

// Lê a jogada do personagem:
var jogadaPersonagem = parseInt(gets());

// Lê a jogada do monstro:
var jogadaMonstro = parseInt(gets());

// TODO: Agora chame a função para realizar o combate para exibir o resultado:
var resultado = combat(jogadaPersonagem, jogadaMonstro);

print(`Personagem ${jogadaPersonagem} x ${jogadaMonstro} Monstro`)
print(resultado);