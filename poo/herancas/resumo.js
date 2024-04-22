///? recuso que permeite uma class herda uma atributo ou metados de outras class
//* class que é herdada é superclass ou class mae
//* class que herda é subclass ou subclass

class Property {
    constructor(area, price) {
      this.area = area
      this.price = price
    }
  
    getPricePerSquareMeter() { //* calcula o preço por metro quadrado
      return this.price / this.area
    }
  }
  
  class House extends Property { } //* digamos que eu crio uma casa com esse mesmo valor da class acima, para não definir novamente, crio extends
  
  
  const land = new Property(200, 50000) //* crio um terreno, com a propriedade acima
  const someHouse = new House(120, 200000) //* crio uma casa
  
  console.log(land)
  console.log(someHouse)
  console.log(someHouse.getPricePerSquareMeter())
  console.log(someHouse instanceof Property)


  //* veja, pego a class acima , mas tambem quero criar outras
  class Apartment extends Property { //* pego as propriedades da clas acima
    constructor(number, area, price) { //* crio number, mas tenho que passar as proprieades do parametro mãe
      // this.area = area (GERA ERRO)
      // this.price = price (GERA ERRO)
      super(area, price) //* parametro mãe, a class que herdei
      this.number = number
    }
  
    getFloor() { //* metodo para retornar o andar
      return this.number.slice(0, -2)
    }
  }
  
  const apt = new Apartment("201", 100, 160000) //* passo o parametro, com um novo e os outros herdados
  
  console.log(apt)
  console.log( "o andar é " + apt.getFloor())