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
} /*
*/
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

9-- fora da função crio minha referncia de botão */

/*//! -----função atender/ vender------------------
posso criar uma função vender, para pega um carro da lista, remove e exibe essa pessoa em uma referencia de saida 
1-- faço a mesma coisa do intem a cima
2-- valido com if se tem carros na lista, carros.length == 0
3-- no item 5.. posso usar o atributo carros.shift().. mas .. let vendido = carros.shift().. pego o item removido e cologo na var vendidos
4-- pego uma referencia de saida e exibo vendidos
//? sõ aqui que muda o resto é igual */

/*//! ------------function lista--------------
mesma coisa de adicionar,  só que vai listando na tela, aqui tem que ter 2 inputs de entreda , item 5
1-- no final da função adicionar , coloco essa função, lista(), para que todas as vezes que eu chamar a função ativar, chame a função lista e mostre os intem listado na tela
2-- seguimos a mesma logica
3-- crio um espaco para concatenar
4-- crio o for for( let i= 0; i < carros.length; i++ ){
     lista += carros[i].modelo + " " + carros[i].preco.tofixed(2); "\n"
}
5-- pego uma referencia de saida para mostra essa lista
6-- crio fora da funçao reference botão*/

/*//! ----------- function filtrar---------------
1-- crio uma let ex; let maximo = number(prompt("qual valor maximo")), pode ser isso ou normal, pegando um imput de entrada.. epgando a referencia e depois igualar a let maximo
2-- valida com if(maximo == 0 etc..)
3-- uso um epsaco para concaternar
4-- pecorro todos os elementos for( let i= 0; i < carros.length; i++ ){
     { if( carros[i].preco <= maximo){lista += carros[i].modelo + " " + carros[i].preco.tofixed(2)}}
5-- crio uma referencia de saida para essa lista
6-- se fica fazio a lista, então não há carros com esse preço
7-- if(lista == ""){
     outlista.textcontent = "nao ha carros com o preco até" + maximo.toFixed(2) 
}  se tiver carros com o preço else{
 outlista.textcontent = " carros até" + maximo.toFixed(2) + "\n-------------------------------\n" + lista 
}
8-- fora da funçao criei um botão referencia

//!----------- function resumir----------
1-- verifico se o vetor está vazio if( carros.length == 0){ nao há carros}
2-- crio uma copia do vetor let copia = carros.slice()
3-- posso ordenar por nome ou number, nesse caso number que é o preço copia.sort(function(a,b) { return a.preco - b.preco});
4-- crio uma lista para concatener let resumo = ""
5-- let aux = copia[0].preco como ele orgazina em ordem crescente o indice zero é o menor preço
6--let modelos = []; para adcionar os modelos
7-- pecorrer for(let i = 0; i <copia.length; i++){
     if(copia[i].preco == aux){
          modelos.push(copia[i].modelos);
     }else{
          resumo += aux + "modelos " + modelos.length + "carros"
          resumo += (modelos.length / copia.length * 100) .tofixed(2) + "%\n";
          resumo += "(" + modelos.join(",") + ") \n\n";
          aux = copia[i].preco
          modelos[]
          modelos.push(copia[i].modelo)
     }
}
resumo+= aux + "modelos" + modelos.length + " carros" 
resumo += (modelos.length / copia.length * 100).tofixed(2) +  "%\n"
resumo += "(" + modelos.join(",") + ")\n\n" 

pega a referencia de saida e iguala a resumo
fora da função botao


*/





