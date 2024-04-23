//* nossa base de dados, amazenar informação salva

module.exports = class Database {
    #storage = {
      authors: [], //| aonde fica salvo o autor
      books: [],
      posters: [],
      orders: [],
      users: []
    }
  
    find(key) { //* veja que o storage ta privado, metodo para acessa, poderia ser com get, mas pode com metodo mais elaborado, esse (key) é o parametro acima, o que o usuario quer, books,authors etc..
      return this.#storage[key]
    }
  
    saveAuthor(author) { //* para salvar no array
      this.#storage.authors.push(author)
    }
  
    findBookByName(bookName) {
      return this.#storage.books.find(b => b.name === bookName) //* o if se o livro existir coloco nno book.name
    }
  
    saveBook(book) {
      const bookExists = this.findBookByName(book.name) //* se existe o livro, fica nessa const
      if (!bookExists) [ //* se não existe, adiciona
        this.#storage.books.push(book)
      ]
    }
  
    addBooksToStock(bookName, quantity) { //* bookname pegeui acima
      const book = this.findBookByName(bookName)
      book?.addToStock(quantity) //* somente se o livro existir, essa propriedade addsostack ta vindo da entidades
    }
  
    removeBooksFromStock(bookName, quantity) {
      const book = this.findBookByName(bookName)
      book?.removeFromStock(quantity)
    }

    //| mesma coisa para o poster
  
    findPosterByName(posterName) {
      return this.#storage.posters.find(p => p.name === posterName)
    }
  
    savePoster(poster) {
      const posterExists = this.findPosterByName(poster.name)
      if (!posterExists) [
        this.#storage.posters.push(poster)
      ]
    }
  
    addPostersToStock(posterName, quantity) {
      const poster = this.findPosterByName(posterName)
      poster?.addToStock(quantity)
    }
  
    removePostersFromStock(posterName, quantity) {
      const poster = this.findPosterByName(posterName)
      poster?.removeFromStock(quantity)
    }

  
    saveUser(user) { //* salvar usuario
      const userExists = this.#storage.users.find(u => u.email === user.email) //* achar ele com o gmail
      if (!userExists) {
        this.#storage.users.push(user)
      }
    }
  
    saveOrder(order) { //* salvar o pedido
      this.#storage.orders.push(order)
    }
  
    showStorage() {
      console.table(this.#storage.authors)
      console.table(this.#storage.books)
      console.table(this.#storage.posters)
      console.table(this.#storage.users)
      console.table(this.#storage.orders.map(order => order.data)) //* é o get, que tem os privados
    }
  }