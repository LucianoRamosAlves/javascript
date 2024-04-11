//? while ---- uso quando não tiver noção de quantas vezes vai repitir
//? repetição indefinida.
var v =1// v igua a 1
while( v < 6){//enquanto 6 for menor que 6 execute, ver se é vdd
    // e depoois executa
   console.log('bom dia')
   v++//s0me mais 1 na var v 
}
/*
--------ou-------
mesma logica
aqui executa e dps ver se é vdd
var v = 1
do {
    console.log
}while( v < 6)*/

/*
---------ou------------
for (var v = 1 ; v < 6 ; v++)
*/

//

//* --- for --- eu já sei , tenho noção da quantidade de repetição

/*for(let i = 0; i<10; i++){
    console.log(i)
}*/

for(let i = 0; i < 20;  i++) { 
    if(i%2==0) { // se dividir o i por 2 o resto der zero
        console.log(i + " é par ") }
    else {
        console.log(i + " é impa" ) } 
}

//* fatorial ----
let n = 3
let fatorial =1

while (n>=1){ // enquanto n for menor ou igua a 1 
    fatorial*=n //multiplicado por n
    n--
}
console.log(fatorial)

//!--- break------
// ao encontrar um break ele encerra o loop,e vai para o outro codigo

let num = 1
while (num < 10 ){
    console.log("Luciano")
    if(num == 5){ // se num igual a 5 , encerrar o while, break
        break;
    }
    num++
}
console.log("fim do programa") // com o break acima, ele executa essa

//! --  continue----
// ele não emcerra , ele apenas não executa uma parte 

let m = 0
let max = 10
let pares = 0

for (let i =m; i < max; i++){
    if(i%2!=0){ // ao dividir por 2 der resto diferente de zero, então é impar
        continue // não executa os impares
    }
    pares++
}
console.log("a quantidades de pares é " + pares )