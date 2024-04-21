const Comment = require("./Comment")

class Post {
  constructor(title, body, author) {
    this.title = title
    this.body = body
    this.author = author
    this.comments = [] //* um poste comeca com um comentario vazio 
    this.createdAt = new Date() //* data que foi criado o poste
  }

  addComment(username, content) { //* comentario no poste
    this.comments.push(new Comment(username, content))
  }
}

module.exports = Post