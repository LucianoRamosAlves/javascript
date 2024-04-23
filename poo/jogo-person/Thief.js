const Character = require("./Character"); //* como vou textar no node, exporto com a sixtase do node, e não do navegador

module.exports = class Thief extends Character {
  attack(targetCharacter) { //* mesmo o mesmo parametro
    targetCharacter.lifepoints -= (this.attackPts - targetCharacter.defensePts) * 2 //* mas esse metodo de atacque é o dobro
  }
}