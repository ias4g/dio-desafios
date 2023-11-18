//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

const { gets, print, combinandoNomesPokemons } = require('./functionsAux')

// Entrada da palavra usando o gets():
var nomeEntrada = gets();

// Chamando a função "combinandoNomesPokemons" com o nome pokemon informado e armazenando o resultado na variável "palavraGerada":
var palavraGerada = combinandoNomesPokemons(nomeEntrada);

print(" ")
print(`Nome: ${nomeEntrada}`)
print("Concatenar com 'saur'")
print(" ")

// Exibindo a palavra gerada:
print(palavraGerada);
print(" ")