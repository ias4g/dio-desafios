const numbers = [1, 2, 3, 4]
function gets() {
  const pos = Math.floor(Math.random() * numbers.length);
  const retorno = numbers[pos]
  return retorno
}

function print(texto) {
  console.log(texto)
}

module.exports = {
  gets,
  print
}