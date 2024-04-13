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
//* pop() adiciona elemento remove o ultimo elemento e posso pegar esse element ex; let ultimoelemento = produtos.pop();
//* shift() remove o primeira elemento e desloca os outro para cima
//* toString() adiciona uma virgula, entre os vetores ex: produtos.toString()
//* join() adiciona um caracteres que eu desejar entre vetores
//* indexOf() busca um elemento no inicio até do vetor ex: console.log(produtos.indexOf(2)) retona peixe
//* lastIndexOf() busca do final até o inicio ex: console.log(produtos.lastindexOf(2)) retona feijão
//* math.random() gera um numero aleatorio
//* sort() ordem alfabetica
//* slice() faz uma copia do vetor ex; let bom = produtos.slice(0,4) pega do indice 0 até o antes do 4 ou seja o 3 e posso pegar do ultimo até o primeiro , começando do ultimo let bom = produtos.slice(-4)
//*includes() pesqquiusa algo e retorna true ou false se tiver no arrays ex; produtos.includes( peixe) retorna true.
//* concat(); juntar arrays ex; let mais = produtos.concat(outros,"pirus");pegou o produtos e juntou com o outro array outros que eu poderia ter criado e com o piru , pegou tudo isso e colocou na let mais
//* splice() remove um grupo de elemneto , tem que informar da onde comeca até aonde termina ex; let elemnetos removidos = produtos.splice( feijão, 2 , "fritas","batata") comeca do feijão e remove 2 a partir do feijão e adiciona fritas e batata
*/

// preciso percorrer todos os elementos do vetor para isso posso usar o método for
// mas antes tenho que pegar o tamanho total desse vetor

for(let produtos = 0; produtos < produtos.length; produtos++) {
     //* ou usaria o i no lugar do produto ex; let i = 0; i < < produtos.length; i++
     //? console.log(produtos[i]); pecorro todos os intens da lista
} 





