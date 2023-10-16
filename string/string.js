let cidade =  "Codó"

console.log(cidade.charAt(0)); // retorna a posição de cada palavra

//* ler quantidaes de palvras 

let anuncio = " veja hoje promoção   impedivél !  "; //? crio a let que vou ler a quantidade de palvras
let tam  = anuncio.length; //? obtenho o tamanho
let numPalavras = 0;  //? inicio o contador

for (let i = 0; i < tam; i++) { //? pecorro os caracteres do anuncio
    if(anuncio.charAt(i) == ""){ //? veja i = 0 ou seja é o começo da palvra, então começa com indice 0, se achar algun espaço , emcrementa no numPalavras que é o contador

        numPalavras++ ;

    }
}

//onsole.log(`" O anunçio " ${anuncio} contem ${numPalavras} palavras `);

//! cópia de caracteres
/* uso substr passo 2 parametros ( posição inicial , e numeros de caracteres a serem copiados) caso eu só infome a posição inicial , ele cpodia dessa posição até o final */

let palavra = "saladas"

let copia1 = palavra.substr(2) // pega do indice 2 e copia até o final, só passei a posição
console.log(copia1);
let copia2 = palavra.substr(2,4) // começa do indice 2 e copia 4 caracteres
console.log(copia2);
let copia3 = palavra.substr(0 , palavra.length-1) // no zero, indica que será copiados todos os numeros menos o ultimo
console.log(copia3);
let copia4 = palavra.substr(-2) // valor negativo indica que é sentido contrario como falei - 2 ele obtem os 2 ultimos
console.log(copia4);

//! indexof() localizar um caracteres, pesquisando pelo começo// lastindexof() pesquisa da direita para esquerda