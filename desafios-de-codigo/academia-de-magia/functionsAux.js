function print(texto) {
  console.log(texto)
}

function getAmount() {
  return Math.floor((Math.random() * 3) + 1)
}

function gets() {
  const typeMagic = ["ataque", "cura", "defesa", "invalido"]
  const index = Math.floor(Math.random() * typeMagic.length)
  return typeMagic[index]
}

// TODO: Crie uma função ou outro conceito de lógica de programação para realizar o combate e retornar o resultado:
//TODO: Implemente uma estrutura condicional if/else para verificar a jogada do personagem e a jogada do monstro, prossiga: 
function getMessage(typeMagic) {
  const mensagens = {
    ataque: "Usou magia de ataque!",
    cura: "Usou magia de cura!",
    defesa: "Usou magia de defesa!",
    invalido: "Tipo de magia inválido!"
  };

  // Aqui fica o retorno da função com a mensagem associada ao tipo de magia fornecido:
  return mensagens[typeMagic] || mensagens.invalido;
}

module.exports = {
  print,
  gets,
  getAmount,
  getMessage
}