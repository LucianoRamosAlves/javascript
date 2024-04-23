module.exports = class Installment { //* parcela do emprestimo
    constructor(value, number) { //* valor, numero da parcela
      this.value = value
      this.number = number
      this.status = 'pending'
    }
  }