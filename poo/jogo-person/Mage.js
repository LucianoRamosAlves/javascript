const Character = require("./Character");

module.exports = class Mage extends Character {
  constructor(name, lifepoints, attackPts, defensePts, magicPts) {
    super(name, lifepoints, attackPts, defensePts) //* já foi visto isso
    this.magicPts = magicPts
  }

  attack(targetCharacter) { //* reescrever o metodo de ataque
    targetCharacter.lifepoints -= (this.attackPts + this.magicPts) - targetCharacter.defensePts //* a soma do ataque points com o magic poinst, entaão tira da vida o poder do ataque mais o poder magic
  }

  heal(targetCharacter) { //* aumenta a vida do person
    targetCharacter.lifepoints += this.magicPts * 2
  }
}