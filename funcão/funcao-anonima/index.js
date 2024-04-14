// No javascript as funções podem ser atribuidas
// a variáveis como se elas fosse valores
function somar(a, b) {
    return a + b
  }
  // Repare que não usamos os () ao lado do nome da função,
  // porque ao fazer isso estaríamos executando a função
  //| somar sem o () estamos igualando a const operação a somar, em resumo a const operação se torna a função somar
  const operacao = somar
  console.log(operacao(4, 5))

  // Para isso, podemos usar as funções anônimas, que
// nada mais são do que funções que não possuem um nome
const subtrair = function (a, b) {
    return a - b
  }
  console.log(subtrair(36, 13))
  //*-------------
  //*eu posso colocar o mesmo nome , pois aqui essa função ia ter o outro comportamento, tenho essa flexicibilidade em aninimos de ter mesma função fazendo coidas diferentes
/*const operacao = function (a, b) {
    return a - b
  }
  console.log(operacao(36, 13)) */ 

  // Com as funções anônimas podemos, por exemplo,
// atribuir uma função a uma chave de objeto
const calculadora = {}
calculadora.somar = somar
calculadora.subtrair = subtrair
calculadora.multiplicar = function (a, b) {
  return a * b
}
console.log(calculadora.multiplicar(3, 7))
//*Perigos das funções anônima
// Funções anônimas só podem ser chamadas após a atribuição da variável,
// elas não são jogadas para o topo do arquivo como funções normais
olaMundo() //* certo, pois funçao normal quando é criado pode ser chamado em qualquer canto
oiMundo()//* errado, funçao anonima foi criado la em baixo, como chama agora se foi criado dps !cuidado

function olaMundo() {
  console.log("Olá, mundo!")
} //* já existe em qualquer lugar

const oiMundo = function () {
  console.log("Oi, mundo!")
} //* só existe daqui em diante , se chamar antes essa função anonima dar errado