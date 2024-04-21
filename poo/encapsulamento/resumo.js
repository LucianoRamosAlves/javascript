//| impedi que partes de uma class seja acessivel, encapsular, isolar
//| no javascript tem 2 niveis  publico ou privado
//* publico ,  o atributo/mrtodo é acessivel fora da class(nivel padrão)
//* privado,  só é acessivel dentro da class
//| para privatizar, coloca o # na frente do nome

//@ imagina uma class com um valor, e que isse valor não pode ser mudado, imagine com um monte de gente trabalhando, para evitar que alguem mude por engano
//@ ou imagina varias class depedentes , que não faz sentido chamar uma só

class Account {
    //* mostrar do lado de fora os privados
    #password
    #balance
  
    constructor(user) {
      this.email = user.email
      this.#password = user.password //* tem que privatizar aqui
      this.#balance = 0
    }
    //* sem privatizar, eu consigo trocar essa senha ex; account.password= 7777, troquei a senha
    getBalance(email, password) { //* para ver o saldo, não consigo ver o saldo fora dessa class, pois foi privatizado
      if (this.#authenticate(email, password)) {
        return this.#balance
      } else {
        return null
      }
    }
  
    #authenticate(email, password) {
      return this.email === email && this.#password === password
    }
  }