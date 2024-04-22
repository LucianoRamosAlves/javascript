//* são class qque não depende de instância para ser chamados, são chamados diretamente pela class
//| não é pelo this ou pessoa.nome
//* uma class precisandefinir um atributo goblal ou seja tenho que ter o mesmo valor para todas as intâncias
//* tabela de bancos de dados

class Reservation {
    constructor(guests, room, days) { //*guests é numero de hospide
      this.guests = guests
      this.room = room
      this.days = days
      this.total = days * Reservation.baseFee //* calculo o valor da reserva, mas esse reservsation.basefee é uma taxa, quero uma mesma taxa pra todas as reservas, veja que acessei pela class
    }
  
    static baseFee = 150 //* crio esse valor fixo, com static , vai ser o mesmo para todos
  
    static showBaseFee() {
      console.log(`Base fee is ${Reservation.baseFee}`)
    }
  
    static get premiumFee() { //* usei junto com o get, mudando o metodo
      return Reservation.baseFee * 1.5
    }
  }
  
  Reservation.showBaseFee()
  console.log(`Premium fee is $${Reservation.premiumFee}`)
  
  const r1 = new Reservation(3, "201", 5)
  console.log(r1)
  
  Reservation.baseFee = 200
  
  const r2 = new Reservation(2, '104', 2)
  console.log(r2)
  
  console.log(`Premium fee is $${Reservation.premiumFee}`)