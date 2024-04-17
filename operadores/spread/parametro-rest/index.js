//? é uma técnica que permite uma função receber qualquer numero de parametros
//? posso também manipular esses parametros como um array na definição da função

//* function sum(...numbers){
  //*  return SVGAnimatedNumberList.reduce((accum,num) => accum + num , 0) 
//*}

//* ao passar o spreed pego todos os conjuntos do parametros, veja que o reduce só funciona em array

function sum(...numbers) { //* esse parametro vira array
    //| soma de todos os numeros
    return numbers.reduce((accum, num) => accum + num, 0) //* esse zero é o valor inicial
    //* primeiro paramentro do reduce é o acumulador ACCUN, resultado acumulado
    //* o segundo é o elemento atual (NUM)

  }
  
  console.log(sum(1, 1)) //@ passei 2 numeros, ele somou
  console.log(sum(2, 2, 2, 2, 2)) //@ se eu passar mais ele soma também
  console.log(sum(32, 5, 74, 7, 1, 9, 90)) //@ posso passar quantos eu quiser

  //! tem quer no final o rest parametro ,, (parm , ...number)