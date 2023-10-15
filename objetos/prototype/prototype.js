//* servi para precisar adicionar um metodo ou propriedades , função a um objeto
//* posso criar na  class ou adicinoar depois

let jogo = function(vidas){
    this.vidas = vidas;
    this.disparos = 10
}

let jogo1 = new jogo (100)

jogo.prototype.energia = 5 //  adicionei energia ao jogo, que no caso vai para os jogos

console.log(`${jogo1.energia}`); // enrgia adicionad no jogo

jogo.prototype.disparar = function() {
    if(this.disparos > 0)
    this.disparos--
else{
    console.log("sem munição")
}
//* adicionei essa função no jogo
}

console.log(`${jogo1.disparos}`);


//? veja como a função funciona mesmo que adicionado ddpois

jogo1.disparar()
jogo1.disparar()
jogo1.disparar()
jogo1.disparar()
jogo1.disparar()
jogo1.disparar()
jogo1.disparar()



console.log(`${jogo1.disparos}`);
