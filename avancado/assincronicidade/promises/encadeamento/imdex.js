//| executar varias promises de uma vez
function checkAge(age) { //* checar idade
    return new Promise((resolve, reject) => {
        if (age) {
            resolve(age > 18)
        } else {
            reject(new Error('age is required'))
        }
    })
}

function getAge(birthday) { //* obtei iadade
    return new Promise((resolve, reject) => {
        if (birthday) {
            const birthYear = new Date(birthday).getFullYear()
            const currentYear = new Date().getFullYear()
            resolve(currentYear - birthYear)
        } else {
            reject(new Error('birthday is required'))
        }
    })
}

//| tenho uma data de aniversario e quero ver se é maior de idade

// Em seguida, podemos chamar a primeira função e utilizar o método .then() para chamar a segunda função após ela, a qual terá que ter o seu próprio método .then() executado para termos enfim o resultado final:

//? forma antiga de chamar 2 promises 
getAge('1995-09-02').then(age => {
    checkAge(age).then(isOver18 => { // vai chamar a função
        if (isOver18) {
            console.log('Maior de idade')
        } else {
            console.log('Menor de idade')
        }
    }).catch(err => {
        console.log(err.message) //* erro da reject acima , funtion getage
    })
}).catch(err => {
    console.log(err.message) //* erro dessa função
})

//No entanto, trabalhar com várias promises dessa forma é confuso e inviável, para isso o javascript nos permite encadear as promises. Isso é possível porque o retorno padrão do .then() também é uma promise, o que significa que nós podemos retornar explicitamente a nossa própria promise qualquer e então encadear esse retorno com outro método .then():
getAge('2009-09-02')
	.then(age => {
    return checkAge(age) //* retorna uma promise, passa adianta, para desencadiar
	})
	.then(isOver18 => { //* como a promise acima já resolve o resultado, passo outra com os if
    if (isOver18) {
        console.log('Maior de idade')
    } else {
        console.log('Menor de idade')
    }
	})
	.catch(err => {
    console.log(err.message)
})