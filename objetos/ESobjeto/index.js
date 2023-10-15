class pessoa{
    constructor(){ // é o metodo, função que é mostrado ao ser chamado
        this.nome="Luciano"
    }
}

let p1 = new pessoa(); // pessoa() esse ( ) fez referncia direta ao construtot
//* new cria um novo objeto , pessoa() fez referncia direta com cobstructor  e coloca detro de p1.. entao no p1 tem contructor com a string nome

console.log(p1.nome);

//* posso passar um valorbno constructor

class cor{
    constructor(parametroCor /* aqui crio o parametro */){ // é o metodo, função que é mostrado ao ser chamado
        this.cor=parametroCor
    }
}

//* aqui passo os valores
let c1 = new cor("azul")
let c2 = new cor("verde")
let c3 = new cor("branco")
console.log(c1.cor + c2.cor + c3.cor);

//*------------------------ posso passar 2 paramneros ------------------

class carro {
    constructor( pnome , ptipo ){ // criei 2 paramnetors
        this.nome = pnome //* nome recebe pnome
        if( ptipo == 1){
            this.tipo = "esportivo"
            this.vel_max = 300
        }
        else if( ptipo == 2){
            this.tipo = "ultiritario"
            this.vel_max = 100
        }
        else if( ptipo == 3){
            this.tipo = "passeio"
            this.vel_max = 180
        }
        else{
            this.tipo = "militar"
            this.vel_max = 160
        }
    }
    info(){
        console.log(this.nome)
        console.log(this.tipo)
        console.log(this.vel_max)
    } 
    //* pegando os valores individual
    getNome(){
        return this.nome
    }
    gettipo(){
        return this.tipo
    }
    getvel_max(){
        return this.vel_max
    }
    //* pegando os valores em array

    getinfo(){
        return[this.nome,this.tipo,this.vel_max]
    }
}

//* passos os valores

let ca1 =    new carro ("rapidão", 1)
let ca2 =    new carro ("super luxo", 3)
let ca3 =    new carro ("bombadão", 4)
let ca4 =    new carro ("lazer", 2)

//* agoraa chamo a funçao

console.log(ca1.info());
//console.log(ca2.info());
//console.log(ca3.info());
//console.log(ca4.info());

//* posso ter o retorno separado ex; do get

console.log(ca2.getNome());

//* pegando em array
console.log(ca4.getinfo());

//----------funcçao adicionar

class pessoa {
    constructor(pnome,pidade){
        this.pnome = pnome;
        this.pidade = pidade;
    }
    getNome(){
        return this.nome;
    }
    geidade(){
        return this.idade;
    }
    setnome(nome){
        return this.nome
    }
    setidade(idade){
        return this.idade
    }
    info(){
        console.log(this.nome)
        console.log(this.idade)
    }
    
}
let pessoas = [] // crio o espaco
//* pepg o botao de reference

dadicionar.addEvenListener("click",(evnt)=>{
    let nome = document.getElementById("innome")
    let idade = document.getElementById("inidade")
    let p = new pessoa(nome.value ,  idade.value) // ao clicar crio um novo obejeto pessoa com as regras a cima
    //* uso o valeu aqui a cima para eu poder limpar os campos
    pessoas.push(p); //no lista pessoa adiciono o p com os objetos 
    nome.value=""
    idade.value=""
    nome.focus()
    addpessoa() // nesse botao chamo a funcçao de saida abaixo
})
//* para mostrar em uma saida 

let addpessoa=()=>{ //  crio uma funcçao
    res.innerHtml="" // deixo o campo limpo
    pessoas.map((p)=>{ // percorro os elemntos em pessoas
        let div = document.createElement("div") 
        div.setAttribute("class" , "pessoas")
        div.innerHTML = p.getnome() +  p.getidade()
        // obvio que eu podia criar essa div manualmente no html e só colocar innerHTML aqui

        outres.appendChilde(div) // pedo a saida e coloco como filha a div que criei
    })
}
