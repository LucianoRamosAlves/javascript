//* é um operador que ler uma propriedade interna de um objeto
//* permite acessar propriedade internas sem lançar erros quando é uma propriedade nul ou undefined 

const user = {
    name: "John Doe",
    email: "doejohn@email.com",
    friends: [{
      name: "Mary",
      address: {
        street: "Some Street",
        number: 89
      }
    }],
    age: 42,
    phone: {
      countryCode: "+55",
      ddd: "22",
      number: "998765432"
    }
  }
  
  // console.log(user.friends[0].phone.ddd) aqui ia dar erro, pois não tem phone nos objetos acima, o erro dar no ddd dentro do phone
  console.log(user.friends[0].phone?.ddd) //* não dar erro, dar undefined , chega no phone, não ler o proximo
  console.log(user?.brothers?.length)  //* esse .?, ele temta ler o user , se tiveer certo , se for nul ou etc..ele para de ler e ele tenta o proximo
  
  console.log(user.brothers?.[5].name)
  //*console.log(user.brothers[5].name) aqui nao tem o 5, ia dar erro, pois o normal tenta ler sem verificar, com o operador, chega no brothers ele verifica se tem o 5, como não tem ele para de ler e retorna undefined