class carro { //* class pai
    constructor( nome , portas){
        this.nome = nome;
        this.portas = portas;
        this.ligado = false;
        this.vel = 0 ;
        this.cor = ""
    }
    ligar =  function(){
        this.ligado = true ;
        this.vel = 10
    }
    desligar =  function(){
        this.ligado = false ;
    }
    setCor(cor){
        this.cor = cor
    }
}

let c1 = new carro("fiat" , 4)
c1.ligar()
c1.setCor("vermelho")

// console.log(`nome do carro é ${c1.nome} com ${c1.portas} portas`);
// console.log(`o carro da sua escolha ${c1.nome} com cor${c1.cor} `);
// console.log(`está ligado ? ${(c1.ligado ? "sim" : "não")}  `);
// console.log(`sua velocidade é ${c1.vel} km/h `);

//* agora digamos que eu quero carros seguindo as propriedades basica acima, mudando outras coisas

class Militar extends carro { //*a class militar tem todos as extenção da classe carro
    // class filho , não herda o conctrutor uso o super() para invocar algo do pai, aqui eu posso passar umas particulidades
    constructor(nome , portas /** preciso desses parametros */ , blingadem , municao){
        super(nome, portas);//* herdei essas do pai
        this.blingadem = blingadem;
        this.municao = municao
        this.setCor("verde")
    }
    atirar = function(){
        if(this.municao > 0){
            this.municao --
    }}

}

let c2 = new Militar("gerra",1 , 100 , 500)

console.log(`nome do carro é ${c2.nome} com ${c2.portas} portas`);
console.log(`o carro da sua escolha ${c2.nome}  cor ${c2.cor} `);
console.log(`está ligado ? ${(c2.ligado ? "sim" : "não")}  `);
console.log(`sua velocidade é ${c2.vel} km/h `);
console.log(`nivel de blindagem ${c2.blingadem} com ${c2.municao} munição `);

c2.atirar();
c2.atirar();
c2.atirar();
c2.atirar();
c2.atirar();
c2.atirar();
c2.atirar();
c2.atirar();
c2.atirar();
c2.atirar();


console.log(`${c2.municao} munição`);

