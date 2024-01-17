const entradas = [1, 2, 4, 5]

function gets() {
  const numeroAleatorio = Math.floor(Math.random() * 4);
  const escolhaDotreinador = entradas[numeroAleatorio];

  return escolhaDotreinador;
}

function print(texto) {
  console.log(texto)
}

module.exports = {
  gets,
  print
}