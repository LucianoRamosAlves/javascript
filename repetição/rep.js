//? while ---- uso quando não tiver noção de quantas vezes vai repitir
//? repetição indefinida.
var v =1// v igua a 1
while( v < 6){//enquanto 6 for menor que 6 execute, ver se é vdd
    // e depoois executa
   console.log('bom dia')
   v++//s0me mais 1 na var v 
}

//* outro ex é um numero fatorial, 
let n = 5
let fat = 1

while(n >= 1){
    fat*=n // fat = fat * n
    n--
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

for(let i = 0; i<10; i++){
    console.log(i)
}
