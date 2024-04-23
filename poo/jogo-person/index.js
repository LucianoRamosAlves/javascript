//! para testar , facça mais testes, 


const Mage = require("./Mage");
const Thief = require("./Thief");
const Warrior = require("./Warrior");

//* (nome , ponto de vida, ataque, defesa, pontos de escudos ,,, obs: verificar )
const arthur = new Mage('Arthur', 90, 4, 2, 14)
const beatrice = new Thief('Beatrice', 140, 22, 8)
const cain = new Warrior('Cain', 200, 14, 12, 4) 

console.table({ arthur, beatrice, cain }) //* mesma coisa que o log, exibi na forma de tabela

cain.switchStance() //* mudo ataque/ desefa, verifica se os pontos mudou
arthur.attack(cain)
beatrice.attack(arthur) ///* beatrice é o ataque tipo thief, ataque o dobro

console.table({ arthur, beatrice, cain }) //* mesma tabela, mas veja que chamei os metodos acima

cain.attack(arthur)
arthur.heal(arthur) //* aumenta os pontos
beatrice.attack(cain)

console.table({ arthur, beatrice, cain })