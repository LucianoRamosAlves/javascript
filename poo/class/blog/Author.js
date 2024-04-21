const Post = require("./Post")

class Author {
  constructor(name) {
    this.name = name
    this.posts = [] //* array do post desse autor
  }

  writePost(title, body) { //* adicionar um post
    const post = new Post(title, body, this) //* com esse terceiro paramentro , passo o proprio author, this, passo o proprio autor para o post
    this.posts.push(post)
    return post
  }
}

module.exports = Author