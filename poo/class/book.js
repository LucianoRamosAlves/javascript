//? class, cria o objeto e dentro, coloco as coias do livro, do constructior, contruir

class Book {
    constructor (title) {
      this.title = title
      this.published = false
    }
  
    publish() {
      this.published = true
    }
  }

  const eragon = new Book("Eragon") //* instanciar, colocar o paramentro, veja que lá em cima , eu só coloquei um paramentro que foi o title
  const eldest = new Book("Eldest")
  const text = new Book("testando")
  
  eragon.publish()
  
  console.log(eragon)
  console.log(eldest)
  console.log(text)
  console.log(eragon instanceof Book) //* verificar se o eragon é uma instancia da class book