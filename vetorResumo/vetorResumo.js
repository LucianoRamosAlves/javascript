let idade = [];
idade[0] = 18; // adicionei 18 no vetor idade, no indice 0
idade[1] = 24;
//? console.log(`${idade}`); 

//----------ou-------------
/* pode adicionar sem prefeencias de indice, mas nesse caso, exclui a ultima
let idade;
idade = 18;
idade = 24;
console.log(`${idade}`); */

let produtos = [ "arroz",  "feijão" ,"peixe" ,"macarrão"]; // listagem de produtos em vetor
//? console.log(`${produtos.join("-")}`);

/* //!------------ATRIBUTOS ------------------
//* push() adiciona elemento no final do vetor
//* unshift() adiciona elemento no inicio e desloca os outro para baixo
//* pop() adiciona elemento remove o ultimo elemento 
//* shift() remove o primeira elemento e desloca os outro para cima
//* toString() adiciona uma virgula, entre os vetores ex: produtos.toString()
//* join() adiciona um caracteres que eu desejar entre vetores
//* indexOf() busca um elemento no inicio até do vetor ex: console.log(produtos.indexOf(2)) retona peixe
//* lastIndexOf() busca do final até o inicio ex: console.log(produtos.lastindexOf(2)) retona feijão
//* math.random() gera um numero aleatorio
*/

// preciso percorrer todos os elementos do vetor para isso posso usar o método for
// mas antes tenho que pegar o tamanho total desse vetor

for(let i = 0; i < produtos.length; i++) {
     //? console.log(produtos[i]); pecorro todos os intens da lista
}

//! --------------função adicionar----------------------
/* passos 
1-- crio o vetor global, fica fora da função, ex: se minha pagina sobre carros então o global é : let carros = [];
2-- crio a função adicionar
3-- padrão , pego as refer~ençias de entrada e saida, pego o value e tranforme em number se precisar
4-- valido o campo de entrada com if, caso o cliente digite um numero ou deixe vazio ou escreva algo não aceitavel
//? ---------------- aqui determina o proposito da função, só mudar os atributos-------------
5-- uso algun atributo, vai no proprosito do site, ex;tem um input para adicionar o modelo, pego a referencia de entrada modelo, que criei no intem  3 ,e aqui pego a let global carros.push(modelo) lembrando, vai do proposito, posso fazer uma adição de mais elaborada
tenho outro input  do preço, pego a referencia de entrada, carros.push({modelo: modelo, preço: preço})
//* aqui poderia ser para remover um intem shift() ai não seria função adicionar e sim remover, ex: em ondotolodia

6-- uso uma "folha" em branco para concatenar as string "os modelos adiciinas" uso padrão em for, então crio uma let lista = "" para receber esses valores

7-- uso o for para pecorrer todos os valores, lembrando que o intem 6 tem que receber ele mesmo , lista += (i + 1) + "." + modelos[i] <== posso moldar essa reposta, e cuidados com as pecuriaridades de cada caso ex: se eu quiser que apareca a lista com a numerção em indice, ex: 1 modeloA , 2 modeloB,.. tenho que somar mais 1 no i do for, por que os indices começa em zero

8-- pego a referencia de saida que vai receber essa reposta acima, que vai receber a lista e mostrar a lista

9-- fora da função crio minha referncia de botão

//! -----função atender/ vender------------------
posso criar uma função vender, para pega um carro da lista, remove e exibe essa pessoa em uma referencia de saida 
1-- faço a mesma coisa do intem a cima
2-- valido com if se tem carros na lista, carros.length == 0
3-- no item 5.. posso usar o atributo carros.shift().. mas .. let vendido = carros.shift().. pego o item removido e cologo na var vendidos
4-- pego uma referencia de saida e exibo vendidos
//? sõ aqui que muda o resto é igual 
*/




