// && and e
// || or ou
/* 
para &&, as duas situação tem que ser verdade,ex 
n1 =1
n2 =2
comnado n1 =1 && n2 =2, nesse caso é verdade , and , uma coisa e outra,
só se sastifaz com os 2
*/
// * já o || aceita um ou outro, se tiver um, já é vervdade

//? ---------- ex ----------
let n1,n2,n3,n4;
n1 = 10
n2 = 20
n3 = 30
n4 = 40

console.log((n1 == n2)||(n4>n1))
//? veja, que uma está errado, mas como esta regido por ou || se uma for vdd, já aceita

console.log((n1 == n2)&&(n4>n1))
//? já aqui é o and, os 2 tem q ser vdd, se não ele retorna false