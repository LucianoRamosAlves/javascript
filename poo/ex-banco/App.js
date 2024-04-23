const Deposit = require("./Deposit")
const Loan = require("./Loan")
const Transfer = require("./Transfer")
const User = require("./User")

module.exports = class App {
  static #users = []

  static findUser(email) { //@ encontrar um usuario a partir do email
    const user = this.#users.find(user => user.email === email) //* se o user é igual ao email
    return user ?? null
  }

  static createUser(email, fullname) {
    const userExists = App.findUser(email) //* se o usuario exist
    if (!userExists) {
      this.#users.push(new User(email, fullname))
    }
  }

  static deposit(email, value) { //* quem vai receber e o email
    const user = App.findUser(email)
    if (user) {
      const newDeposit = new Deposit(value)
      user.account.addDeposit(newDeposit)
    }
  }

  static transfer(fromUserEmail, toUserEmail, value) {
    const fromUser = App.findUser(fromUserEmail) //* verificar se existe, tentar encontrar
    const toUser = App.findUser(toUserEmail)
    if (fromUser && toUser) { //* se os 2 existir
      const newTransfer = new Transfer(fromUser, toUser, value)
      fromUser.account.addTransfer(newTransfer) 
      toUser.account.addTransfer(newTransfer)
    }
  }

  static takeLoan(email, value, numberOfInstallments) { //* pegar emprestimo
    const user = App.findUser(email) //* encontrar
    if (user) { //* se existir
      const newLoan = new Loan(value, numberOfInstallments) //* pego empresrtimo
      user.account.addLoan(newLoan)
    }
  }

  static changeLoanFee(newFeePercentage) { //* mudda a taxa doo emprestimo
    Loan.fee = newFeePercentage
  }
}