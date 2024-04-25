//| execucao sincrono, segue linha por linha, passo por passo, só executa a outra linha, quando terminar a de cima

function step02() {
    console.log('Passo 02')
}

console.log('Passo 01')
step02()
console.log('Passo 03')

//* mas a vezes é ruim, pq as outras linhas fica travado esperando sua vez, tem o assicrono
console.log('Passo 04')
setTimeout(() => { //* esse atributo roda de forma assicrona
    console.log('Passo 05') //* o normal, ia executar , esperar esses 2 segundos e só depois ia executar a de baixo, mas no assicrono, executs a de baixo e só depoois vem essa
}, 2 * 1000)
console.log('Passo 06')