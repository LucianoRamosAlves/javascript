class Comment {
    constructor(username, content) {
      this.username = username
      this.content = content
      this.createdAt = new Date() //* data que o comentario foi salvo
    }
  }
  
  module.exports = Comment