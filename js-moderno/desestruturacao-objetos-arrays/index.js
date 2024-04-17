//| é como se eu pegasse um objeto,  com varias propriedades , quebrasse em uma especifica e criar uma varival com ela
//| no caso do array podemos colocar um nome, pois não tem tanta propriedades
//| tambem podemos usar como parâmetros de função

const person = {
    name: "Luke",
    job: "Farmer",
    parents: ["Anakin", "Padme"]
  }

  //| tenho um objeto pessoas e quero criar variavéis a partir desse objeto
  
  const name = person.name //| forma tradicional de criar variavel do objeto
  
  const { job, parents } = person //| {} , essa chave antes do igual,criar, podia ser const { job } = person nesse caso ia criar, desestrutura em job
  
  console.log(name, job, parents)
  
  const [father, mother] = parents //| [] antes do igual, pego esse 2 elementos dentro do parents, ele pega da ordem a cima
  
  console.log(father, mother)

  //| sem desestruturação e simplificação
  function createUser({ person}) {
    const id = Math.floor(Math.random() * 9999) //| criando um id aleatorio
    return {
      id,
      name : person.name,
      job : person.job,
      parents: person.parents
    }
  }

  //| com desestruturação no parametro, coloco a chave dentro do parametro e pego esses element
  
  function createUser({ name, job, parents }) {
    const id = Math.floor(Math.random() * 9999)
    return {
      id,
      name,
      job,
      parents
    }
  }
  
  const luke = createUser(person)
  
  console.log(luke)