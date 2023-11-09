const entradas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function gets() {
  const numeroAleatorio = Math.floor(Math.random() * 9);
  const value = entradas[numeroAleatorio];

  return value
}

function print(texto) {
  console.log(texto)
}

module.exports = {
  gets,
  print
}