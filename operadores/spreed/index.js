
//------------- para copiar um array
let n1 = [10,20,]
let n2 = [40,50,60]
let n3 = [70,80,90,100]
let n4 = [... n1]
//* copiei os valores de n1 para n4
console.log(n4)
//* posso copiar mais de 1 array para uma let
let n5 = [...n2,...n3]
//* copiei os valores de n2 e n3 para n5
console.log(n5)

const jogador1= { nome:"pedro", idade:"28"}
const jogador2= { nome:"atur", idade:"21"}
const jogador3= { ...jogador1,...jogador2}
console.log(jogador3)
//* como idade tem nos 2, ele aparece o ultimo

//! posso transformar os elementos html para um array
//* tenho mais opção com isso
const objeto1 = document.getElementById("id") //* normal
const objeto2 = [...document.getElementById("id")] //* modo array

objeto1.ATTRIBUTE_NODE
objeto2.filter // aperte ctrl + space e veja quantos atributos eu tenho

