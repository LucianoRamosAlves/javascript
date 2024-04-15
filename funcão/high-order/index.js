//| Funções de alta-ordem, ou high-order functions, são funções que
//| recebem outras funções como parâmetro e as executam em algum momento
function calcular(a, b, operacao) {
    console.log("Realizando uma operação.")
    const resultado = operacao(a, b)//* os parametros nao precisa ser igual,pode ser outra coisa
    return resultado
  }
  //*Referenciar a função vs Chamar a função
// Repare que não usamos os () ao lado do nome da função,
// porque ao fazer isso estaríamos executando a função
function somar(x, y) {
  console.log("Realizando soma.")
  return x + y
}
calcular(3, 5, somar)
console.log(somar)       // Retorna a própria função
console.log(somar(1, 1)) // Chama a função (retorna o resultado da função)
//*Funções anônimas como parâmetros
// Também podemos escrever funções anônimas dentro da própria chamada da high-order function
calcular(9, 2, function (x, y) {
  console.log("Realizando substração.")
  return x - y
})
//*Exemplo real
// Essas funções que são passadas como parâmetros geralmente são chamadas de callbacks
// Um exemplo comum de high-order function no javascript é a função .forEach() dos arrays
function exibirElemento(elemento, indice, array) {
  console.log({
    elemento,
    indice,
    array
  })
}

const lista = ["Maçã", "Banana", "Laranja", "Limão", "Uva"]
// Forma tradicional para percorrer
for (let i = 0; i < lista.length; i++) {
  exibirElemento(lista[i], i, lista)
}
// Forma funcional para percorrer
lista.forEach(exibirElemento)
// Também poderia ser feito:
lista.forEach(function (elemento, indice, array)/* só isso precorre lista.forEach(exibirElemento) */ {
  console.log({
    elemento,
    indice,
    array
  })
})

//! metodos --------------------------

 //? Array usado nos exemplos
const personagens = [
  { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
  { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
  { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
  { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
  { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
]
 //! Map pego os elementos do arry e cria outro arry
 //*const nomes = []
 //? forma tradicional , percorre pega e joga na nome
 //*for (let i = 0; i < personagens.length; i++) {
   //*const personagem = personagens[i]
   //*nomes.push(personagem.nome)
 //*}

// map: permite obter um novo array a partir de um array existenste
const nomes = personagens.map(function (personagem) {
  return personagem.nome
})
//* pega todos os nomes e coloca em array

 //!Filter
  //? tradicional
//*const orcs = []
//*for (let i = 0; i < personagens.length; i++) {
  //*const personagem = personagens[i]
 //* if (personagem.raca === "Orc") {
  //*  orcs.push(personagem)
 //* }
//*}

// filter: permite obter um novo array contendo apenas elementos específicos de um array existente
const orcs = personagens.filter(function (personagem) {
  return personagem.raca === "Orc"
})

//! Reduce serve para transformar um array em outra coisa, seja um objeto,string etc...
// reduce: serve para reduzir um array existente a um valor final qualquer,
// passando um valor entre cada iteração sobre esse array e retornando ele no final
const nivelTotal = personagens.reduce(function (acumulador, personagem) { //* acumulador é o valor da soma do anterior
  return acumulador + personagem.nivel
}, 0)//* esse zero é o valor inicial da contagem 

const racas = personagens.reduce(function (acumulador, personagem) {
  if (acumulador[personagem.raca]) {
    acumulador[personagem.raca].push(personagem)
  } else {
    acumulador[personagem.raca] = [personagem]
  }
  return acumulador
}, {})//* {} variavel raca começa vazio
//* somo todos os nivel e tranformo em um numero só

 //!Sort
 //* altera o array original, pois coloca em nova ordem
// sort: ordena os elementos de um array a partir de comparações entre duplas de elementos
//* tem q ter 2 elementos no paramentro, um par (a ,b) para fazer a comparação
personagens.sort(function (a, b)  {
  return a.nivel - b.nivel
  //* nesse caso ta em ordem crescente
})

//* nesse caso, ele não muda o array original, ele tira uma copia e ordena nessa copia, que jogamos essa copia ordenada no const personagemOrdenados
 const personagemOrdenados = personagens.slice().sort(function (a, b)  {
  return a.nivel - b.nivel
  //* nesse caso ta em ordem crescente
})