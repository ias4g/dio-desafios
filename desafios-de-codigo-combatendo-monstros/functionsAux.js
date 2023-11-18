function print(texto) {
  console.log(texto)
}

function gets() {
  const randomNumber = Math.random() * 6
  return randomNumber
}

// TODO: Crie uma função ou outro conceito de lógica de programação para realizar o combate e retornar o resultado:
//TODO: Implemente uma estrutura condicional if/else para verificar a jogada do personagem e a jogada do monstro, prossiga: 
function combat(jogadaPersonagem, jogadaMonstro) {
  let res;
  if (jogadaPersonagem === jogadaMonstro) {
    res = "Foi um empate!";
  } else if (jogadaPersonagem > jogadaMonstro) {
    res = "Personagem venceu a batalha!";
  } else {
    res = "Monstro venceu a batalha!";
  }
  return res
}

module.exports = {
  print,
  gets,
  combat
}