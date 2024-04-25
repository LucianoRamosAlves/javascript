//*Vamos conhecer primeiro a função setTimeout, uma high-order function que permite executar uma função de callback após um determinado tempo:
console.log('Programa iniciado!')

const timeoutId = setTimeout(() => { //* espera um tempo, para executar
    console.log('2 segundos se passaram desde que o programa foi iniciado.')
}, 2 * 1000) //* esse tempo é em milisesgundos

clearTimeout(timeoutId) //* para o temporizador


//* esse aqui cria um intervalo, repeti 
/*let seconds = 0
setInterval(() => {
    seconds += 3
    console.log(`Se passaram ${seconds} segundos.`)
}, 3 * 1000)*/

let seconds = 0
const intervalId = setInterval(() => {
    seconds += 3
    console.log(`Se passaram ${seconds} segundos.`)
    if (seconds > 10) {
        clearInterval(intervalId)
        console.log('Tempo esgotado! Encerrando...')
    }
}, 3 * 1000)