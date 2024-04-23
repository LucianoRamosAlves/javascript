module.exports = class Character {
    constructor(name, lifepoints, attackPts, defensePts) {
      this.name = name
      this.lifepoints = lifepoints
      this.attackPts = attackPts
      this.defensePts = defensePts
    }
  
    attack(targetCharacter) { //* metodo para atacar outro person, outra instÂncia 
      targetCharacter.lifepoints -= this.attackPts - targetCharacter.defensePts //* calculo do ataque, subtrai do target
    }
  }