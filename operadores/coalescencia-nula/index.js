/*const a = 0 //* zero no js é false

const b = null //* null no js é false

const c = "teste" //* essa é true

confirm(a || b || c) //* qual vai aparecer ? , nesse caso é o c , pois o OU ele tenta um , até achar a verdadeira */

//! com coalecencia nula, não considera valores exxpressão false, null ou undefined ele ignora e pula para o proximo 
//* confirm(a ?? b ?? c) ele retorna o zero, pois não é null , nem undefined

let a = 0

let b = a || 42 //* b é igual a A ou 42 , como A é zero , pula pra 42 

console.log({ a, b }) //* ele pula o A , pois seu valor é zero e atribui 42 ao valor B, pois ||  não traabalha com false

b = a ?? 42

console.log({a, b}) //* aqui eu já considero o zero , o b é igual zero, pois como A não é null , nem undefined , ele já pega esse valor

let c = false ?? 42 //* C é false, só ia pular, ser 42 se fosse null ou undefined

console.log({c}) //* nesse caso  C é false, só seria 42 se fosse num ou undefined