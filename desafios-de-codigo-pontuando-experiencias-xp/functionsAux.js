let i = 0
const entradas = [2, 3]
// const entradas = [15, 3]
// const entradas = [10, 6]

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