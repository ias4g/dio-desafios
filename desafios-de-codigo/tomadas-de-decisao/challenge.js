const { getAction, getMessage, getName, print } = require('./functionsAux')

// Solicita ao usuário que insira o nome do personagem:
const name = getName();

// Solicita ao usuário que escolha entre "Atacar" ou "Fugir":
const action = getAction();

// TODO: Implemente uma solução utilizando lógica de programação;
const message = getMessage(name, action)

//TODO: Verifique a ação escolhida e exibir a mensagem correspondente:
print(" ")
print(`Personagem: ${name}`)
print(`Ação: ${action}`)
print(" ")
print(message)
print(" ")