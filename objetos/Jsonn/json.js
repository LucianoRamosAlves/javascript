//? preciso para conveter objetos literias em um JSON ,  quando usar bancos de dados , usaremos em json e vice versa quando recebemos um dado vai esta em json ai eu posso conveter em um objeto literal

let pessoa = {
    nome: "Luciano",
    sobrenome: "Ramos",
    idade: 24 ,
    MateriasPrefiridas:{
        matematica: "Regra De Tres",
        ciencias: " Citologia",
        fisica:"optica"
    }
}

console.log(`${pessoa.nome} ${pessoa.sobrenome} idade ${pessoa.idade} ${pessoa.MateriasPrefiridas.matematica}`);

let string_json_pessoa = JSON.stringify(pessoa); // stringify converte objeto litral em string json
console.log(`${string_json_pessoa}`);

//* string json para objeto JSON.parse()
