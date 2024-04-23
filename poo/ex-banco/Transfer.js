module.exports = class Transfer {
    constructor(fromUser, toUser, value) { //* quem fez , quem recebeu , valor
      this.fromUser = fromUser
      this.toUser = toUser
      this.value = value
      this.createdAt = new Date()
    }
  }