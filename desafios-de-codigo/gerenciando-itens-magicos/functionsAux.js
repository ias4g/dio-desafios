function print(texto) {
  console.log(texto)
}

function gets() {
  const datas = [
    { type: 'Espada', damage: 200, resistance: 300 },
    { type: 'Cajado', damage: 600, resistance: 800 },
    { type: 'Arco', damage: 900, resistance: 500 },
    { type: 'Arma', damage: 1000, resistance: 400 }
  ]

  const index = Math.floor(Math.random() * datas.length)

  const value = datas[index]
  return value
}

module.exports = {
  print,
  gets
}