function print(texto) {
  console.log(texto)
}

function getAction() {
  const actions = ["Atacar", "Fugir", "Correr"]
  const index = Math.floor(Math.random() * actions.length)
  return actions[index]
}

function getName() {
  const names = ["Jubileu", "Ragnar", "Elsa Yajin"]
  const index = Math.floor(Math.random() * names.length)
  return names[index]
}

function getMessage(nomePersonagem, acaoEscolhida) {
  let message
  switch (acaoEscolhida) {
    case 'Fugir':
      message = `${nomePersonagem} escolheu ${acaoEscolhida}!`
      break;
    case 'Atacar':
      message = `${nomePersonagem} escolheu ${acaoEscolhida}!`
      break;
    default:
      message = 'Tente novamente'
      break;
  }

  return message
}

module.exports = {
  print,
  getAction,
  getName,
  getMessage
}