function print(texto) {
  console.log(texto)
}

function gets() {
  const names = ["Bulba", "Ivy", "Venu"]
  const index = Math.floor(Math.random() * names.length)
  return names[index]
}

// TODO: Defina uma função chamada "combinandoNomesPokemons" que recebe um parâmetro chamado (palavra);
// TODO: Dentro da função, crie uma variável chamada "palavraPokemon" que é formada pela concatenação da "palavra" com a string "saur";  
// TODO: Após a váriavel, retorne a palavra pokemon; 
function combinandoNomesPokemons(palavra) {
  const palavraPokemon = palavra + 'saur'
  return palavraPokemon
}

module.exports = {
  print,
  gets,
  combinandoNomesPokemons
}