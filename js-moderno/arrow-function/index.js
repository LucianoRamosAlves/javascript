//*  não ultiliza a palavra function ultiliza => após os parâmetros
//* não tem this,arguments,super e new.target
//* pode retornar diretamente uma expressão caso seja uma função de uma unica linha

//@ diferentes tipos de função até aqui

function normalSoma(a , b) {
    return a + b;
}

let anonimoSoma = function (a, b) {
    return a + b;
}

let arrowSoma = (a, b) => {
    return a + b;
}   

//* se for em uma linha 

let arrowsub = (a,b ) => a - b;
 
//* são muito usados nos metod em array

const towns = ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Geffen', 'Morroc']

const startingWithP = towns.filter(town => town[0] === 'P')
console.log(startingWithP)

//* towns.filter ( pegp todos que comeca com a letra p ) pego town e quero retornar => e passo o que eu quero, olha a estrutura arraw función