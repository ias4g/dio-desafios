// Definição da classe ItemMagico
class ItemMagico {
  //TODO: Crie adequadamente um construtor que receba todos os atributos referente ao item mágico:
  constructor(type, damage, resistance) {
    this.type = type
    this.damage = damage
    this.resistance = resistance
  }

  calcularDano() {
    return this.type === 'Arma' ? this.damage * 2 : this.damage;
  }
}

module.exports = {
  ItemMagico
}