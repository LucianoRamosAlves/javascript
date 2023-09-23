let num =[ 10,20,30]
console.log(num) //* mostra quantos tem
console.log(num[2]) //* mostra o indice 2

var total = num.length //* total de elementos
console.log(total)
num[1]=55 //* passo o 55 para o indice 1
console.log(num)
num.push(60) //* adiciona 60 no ultimo elemento
console.log(num)
 var indice = num.indexOf(10) //* qual indice do 10
 console.log(indice)
 var ordem = num.sort()
 console.log(ordem) //* ordem crescente

 for(let pos in num){
    console.log(num[pos]) //* percorre todos os elementos contido na let/const/var
 }                        //* manter esse formato mude só o nome da let em questão