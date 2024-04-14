//* metodo é uma função atrelada a um objeto

let pessoa = {
    nome: "Luciano",
    idade: 26 ,
    dizerOI(){
        console.log("oi" + "meu nome: " + this.nome)
    }
    //* ainda posso referenciar ao proprio objeto, se eu quiser que nesse oi aparece o nome Luciano contigo no proprio objeto, então uso a palavra reservada THIS. o this sempre aponta para o proprio objeto
}

console.log(pessoa)
 pessoa.dizerOI()