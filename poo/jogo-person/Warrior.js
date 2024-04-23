const Character = require("./Character")

module.exports = class Warrior extends Character {
  constructor(name, lifepoints, attackPts, defensePts, shieldPts) {
    super(name, lifepoints, attackPts, defensePts)
    this.shieldPts = shieldPts
    this.stance = 'attacking' //* aqui é pra trablahr com string
  }

  attack(targetCharacter) {
    if (this.stance === 'attacking') { //* só ataca se tiver na posição de attack
      super.attack(targetCharacter) //* não presico reescrever o calculo de ataque, passo apenas o mertodo do calculo, já feito
    }
  }

  switchStance() { //* alterna em ataque e defessa
    if (this.stance === 'attacking') {
      this.stance = 'defending'
      this.defensePts += this.shieldPts //* em defesa, somo os pontos do escudo
    } else {
      this.stance = 'attacking'
      this.defensePts -= this.shieldPts //* em ataque tiro os ponto do escudo, volta ao normal
    }
  }
}