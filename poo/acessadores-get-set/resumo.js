//* são rrecurso para definir a forma como acessamos uma propriedade de um objeto
//* ex; padrão pessoa.nome ou pessos.nome=""

//| ai temos 2 maneiras deferente, os acessadores

//? get , é a modificação do pessoa.nome
//? set , é a modificação do pessoa.nome=''

//@ uma class possui uma propriedade que nescessita de uma verificação antes de ter o seu valor modificado
//@ uma class possui uma propriedade privada que nescessita de um acessador publico somente para leitura

  class Wallet {
    #amount
    #username
  
    constructor() {
      this.#amount = 100.99 * 100 // 10099 //* para ler esse valor fora da função, pois é privado e veja que acrescentei comportamento
    }
  
    get amount() {
      return this.#amount / 100
    }
       //* ou como visto antes, poderia ter feito isso com metodo

       amount(){
        return this.#amount  / 100
    }
  
    set username(newUsername) { //* tenho que passar esse parametro, é o que o usuario escreve depois do sinal de igual
      if (typeof newUsername === 'string') { //*nconsigo passa tambem um if
        this.#username = newUsername // obs; o username ta privado, pois ia ter o mesmo nome do set, username, ia dar um loopinfinito
      } else {
        console.log('username must be of type string')
      }
    }
  
    get username() { //* para ler o valor
      return this.#username
    }
  }
  
  const myWallet = new Wallet()
  
  console.log(myWallet.amount)
  
  myWallet.username = "Isaac"
  console.log(myWallet.username)
  
  myWallet.username += " Pontes"
  console.log(myWallet.username)
  
  myWallet.username = 52002
  console.log(myWallet.username)