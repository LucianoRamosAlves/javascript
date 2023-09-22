let num = 10;
res = (!(num%2)? "par" : "impar") // resto zero
console.log(res);

/* veja que resto zero é par, mas no console res, deu impar,
isso porque se der 1 ele retorna true o primeiro valor(par);

se der zero, ele retorna false, o segundo valor(impar), que nesse caso deu 
zero e entao deu impar, para corrigir, invertir o valor
//* ou inverter os valores, coloco impar : par
*/
let n1 = 11;
let n2 = 10;
res = (n1 > n2 ? "veradeiro" : "falso") // resto zero
console.log(res);

let status = "A"
st = (status == "A" ? "ativo" : "inativo")
console.log(st)
/* isso serve para eu manipular dados de como vai aparecer na tela,
ao invés de aparecer false ou true , posso colocar para outros nomes mais 
formal, nesse caso recebi um dado A no backand , ai com o ternario na tela me aparece ativo*/