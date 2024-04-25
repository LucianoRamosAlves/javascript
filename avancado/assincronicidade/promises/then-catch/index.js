/*function execute() {
    return new Promise((resolve, reject) => {
        console.log('A promise está sendo executada.')
        setTimeout(() => {
            console.log('Resolvendo a promise...')
            resolve(3*10)
        }, 3 * 1000)
    })
}

const p = execute()

p.then((result) => { //@ then, servi para lidar com promises resolvida, tenho acesso ao valor do resultado
    console.log(`A promise foi resolvida. O resultado foi: ${result}`)
})*/


//@- O mesmo vale para quando uma promise é rejeitada. Para evitarmos o término da aplicação usamos o método **.catch()** para lidar com a rejeição da promise. Assim como no .then(), definimos o .catch() passando uma função como parâmetro que será justamente a função reject que será chamada em caso de rejeição, ou seja, ela própria tem como parâmetro o motivo da rejeição:
    
   //@ Obs.: repare que encadeamos o .catch() no .then(), pois se não fizermos assim o código ainda resultará em erro. Ao encadearmos o .then() e o .catch() a rejeição da promise acontece da forma correta.

   function execute() {
    return new Promise((resolve, reject) => {
        console.log('A promise está sendo executada.')
        setTimeout(() => {
            if (1 + 1 === 2) {
                reject('1 + 1 não é igual a 2')
            } else {
                console.log('Resolvendo a promise...')
                resolve('Resultado')
            }
        }, 3 * 1000)
    })
}

const e = execute()

e.then((result) => {
    console.log(`A promise foi resolvida. O resultado foi: ${result}`)
}).catch((err) => {
    console.log(`A promise foi rejeitada! Motivo: ${err}`)
})

// ... esse é o formato do execute, da função, já passa logo o then e catch

execute().then((result) => {
    console.log(`A promise foi resolvida. O resultado foi: ${result}`)
}).catch((err) => {
    console.log(`A promise foi rejeitada! Motivo: ${err}`)
}).finally(() => { //| seja ela resolvida ou rejeitada, mostra
    console.log('A promsie foi finalizada.')
})