/*
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