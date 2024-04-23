const Installment = require("./Installment") 

module.exports = class Loan { //* emprestimo
  static #fee = 1.05 //| atributo estatico privado, ou seja, isso é a taxa de emprestimo e vai servi em outros lugares nesse caso é 5%

  constructor(value, installments) { //* valor e quantidade de parcelas
    this.value = value
    this.installments = []
    for (let i = 1; i <= installments; i++) {
      this.installments.push(new Installment((value * Loan.#fee) / installments, i)) //* valor da parcela, esse i é o numro da parcela
    }
    this.createdAt = new Date() //* data do emprestimo feito
  }

  static get fee() {
    return Loan.#fee
  }

  static set fee(newFeePercentage) { //* o valor que a pessoa passar, trtanforma na pocentagem com ponto, ex se passar 5%, tranforma em 1.05, que nem acima
    Loan.#fee = 1 + (newFeePercentage / 100)
  }
}