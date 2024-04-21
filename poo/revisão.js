//* revisão objetos

//| forma tradicional 
const book = {
    // varias formas de trabalahr em objeto
    title: "Eragon",
    pages: 468,
    published: true,
    inStock: 20,
    tags: ["fantasy", "adventure", "medieval"],
    author: {
      name: "Christopher Paolini"
    },
    addOnStock(quantity) {
      this.inStock += quantity // this , trabalho com esse objeto, pego o istock dessse objeto e adicino uma quantity
    },
    save: function () {
        // Save book data to database
      }
  }

  //* função construtora , são fabricas de objetos
  // mais fail trabalahr com objetos
  function Book(title, pages, tags, author) {
    this.title = title
    this.pages = pages
    this.tags = tags
    this.author = author
    this.published = false
    this.inStock = 0
    this.addOnStock = function addOnStock(quantity) {
      this.inStock += quantity
    }
    this.save = function () {
      // Save book to database
    }
  }
   // pegeui o parametors e passei seus valores
  const author = { name: "Christopher Paolini" }
  const tags = ["fantasy", "adventure", "medieval"]
  
  const eragon = new Book("Eragon", 468, tags, author) // para eu passar outro book, chama uma função construtora
  
  eragon.addOnStock(20)
  
  const eldest = new Book("Eldest", 644, tags, author) // para eu passar outro book, chama uma função construtora
  
  console.log(eragon)
  console.log(eldest)