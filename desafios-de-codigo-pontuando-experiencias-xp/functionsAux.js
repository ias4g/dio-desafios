let i = 0
// const entradas = [45, 40]
// const entradas = [41, 38]
const entradas = [15, 20]

function gets() {
  const value = entradas[i]
  i++

  return value
}

function print(texto) {
  console.log(texto)
}

module.exports = {
  gets,
  print
}