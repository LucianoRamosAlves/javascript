//* testano

const Author = require("./Author");

const john = new Author("John Doe")

const post = john.writePost("Título do Post", "Lorem ipsum dolor sic amet ...")

post.addComment("Isaac", "Muito bom!")
post.addComment("Lucas", "Achei interessante.")

console.log(john)
console.log(post)

//* circula *1 , é um loop, uma chama o outro, cuidado com isso