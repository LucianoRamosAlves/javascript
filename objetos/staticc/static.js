//* consigo invocar um metodo ou atributo sem chamar a class  ex:  se eu definir um valor de atributo statick da class todos os objetos das class vai ter / ler o mesmo valor

class jogo {
    static alerta = false // geral com falso METODO ATRIBUTO
    constructor (vida){
        this.vida = vida;
    }
    info = function(){
        console.log(`vida: ${this.vida}`);
        console.log(`alerta: ${(jogo.alerta? "sim" : "não")}`); // METODO ATRIBUTO
        console.log(`-------------------------`);
    }
    //* posso fazer com a condição true false ou posso criar um função e ao chamar todos fica em alerta

    static alertar = function(){ // METODO FUNÇÃO
        jogo.alerta = true;
    }
}

let jogo1 = new jogo(100)
let jogo2 = new jogo(60)
let jogo3 = new jogo(10)

//jogo.alerta = true; // mudo todos os aleerts. mudo da class.. todos os jogos ficam em alerta METODO ATRIBUTO
jogo.alertar() // METODO FUNÇÃO

//* todos ficam com alerta

jogo1.info()
jogo2.info()
jogo3.info()