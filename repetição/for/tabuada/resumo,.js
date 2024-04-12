//* cria uma variavel let com o indice = a 0, deppois verifca a condição e por ultimo soma mais 1 até a condição for verdadeira

for( let indice = 0; indice <=10; indice++ ) {

}

// ou poderia criar essa variavel por fora  ex: let indice = 0 --- for(indice <=10; indice)

//* tamanho da letra igual a zero, pega o tamanho da letra, quantidades de letras tem q ser menor ou iguall ao nome colocado e adciono uma letra a mais se for verdade, no console pego cada letra[0] e  mostra

for( let letras = 0; letras <= nome.Length; letras++){
    console.log(nome[0]);
}
//! cuidade que a contagem comeca do zero, das letras 

//*----------------------- outro metodo detalahdo de fazer tabuada usando for

const numero = parseFloat(prompt("De qual número você deseja calcular a tabuada?")) //? pego o numero
let resultado = "" //? uso um espaco vazio pra concatenar

for (let fator = 1; fator <= 20; fator++) {
    resultado += " -> " + numero + " x " + fator + " = " + (numero * fator) + "\n"

    //* resultado += isso vai concatenando pois esse operador serve para somar e para concatenar
  }
  alert("Resultado da Tabuada de " + numero + ":\n\n" + resultado)


  //* palavra invertido--------------------------
  const palavra = prompt("Informe uma palavra:")
let palavraInvertida = ""
//* esse -1 ,, pega o ultimo indice ou seja a ultima letra, i-- do ultimo vai tirando 1
//* esse i  >= 0, significa q vai pegar os numeros, os indices no caso as letras até o zero ou seja a primeira letra
for (let i = palavra.length - 1; i >= 0; i--) {
  palavraInvertida += palavra[i]
  //* pelo o espaco vazio e concatenoa palavra na posiççao[1]
}

if (palavra === palavraInvertida) {
  alert(palavra + " é um palíndromo!")
} else {
  alert(palavra + " não é um palíndromo!\n\n" + palavra + " !== " + palavraInvertida)
}
  
 