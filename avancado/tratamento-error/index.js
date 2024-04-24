function sum(a, b) {
    const firstNumber = Number(a)
    const secondNumber = Number(b)

    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        throw new Error('arguments must be two numbers')
    }

    return firstNumber + secondNumber
}

console.log(sum(2, 9))
console.log(sum(true, 14))
console.log(sum(undefined, 22)) //* aqui dar erro, e o codigo para
console.log(sum(18, "0"))
console.log(sum(39, null))
console.log(sum(13, "zero"))

function sum(a, b) {
    const firstNumber = Number(a)
    const secondNumber = Number(b)

    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        throw new Error('arguments must be two numbers')
    }

    return firstNumber + secondNumber
}

try { //* tentar fazer algo
    console.log(sum(2, 9))
    console.log(sum(true, 14))
    console.log(sum(undefined, 22))
    console.log(sum(18, "0"))
    console.log(sum(39, null))
    console.log(sum(13, "zero"))
} catch { //* se acontecer algum erro ao tentar
    console.log("An error ocurred!")
}
//* veja que não encerrou a aplicação, ele continua e no erro, mostra a msg e segui o fluxo

//*Além disso, podemos definir um parâmetro para o objeto do erro que foi lançado, declarando-o entre parêntesis após a palavra catch para podermos ter acesso aos dados do erro:
try {
    console.log(sum(2, 9))
    console.log(sum(true, 14))
    console.log(sum(undefined, 22))
    console.log(sum(18, "0"))
    console.log(sum(39, null))
    console.log(sum(13, "zero"))
} catch (error) { //* esse parametro é o erro
    console.log("An error ocurred!")
    console.log(error.message)
}

//*Por fim, também podemos definir, após o bloco catch, um bloco finally, que irá executar depois do bloco try caso dê tudo certo ou depois do bloco catch caso um erro tenha ocorrido. Ele é literalmente um “finalmente”: , sempre é exutado
try {
    console.log(sum(2, 9))
    console.log(sum(true, 14))
    console.log(sum(undefined, 22))
    console.log(sum(18, "0"))
    console.log(sum(39, null))
    console.log(sum(13, "zero"))
} catch (error) {
    console.log("An error ocurred!")
    console.log(error.message)
} finally {
    console.log('Calculations finished.')
}