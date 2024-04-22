class Vehicle {
    move() {
      console.log("O veículo está se movendo.")
    }
  }
  
  class Car extends Vehicle {
    move() {
      console.log("O carro está se movendo.")
    }
  }
  
  class Ship extends Vehicle {
    move() {
      console.log("O navio está navegando.")
    }
  }
  
  class Aircraft extends Vehicle {
    move(speed) {
      console.log(`A aeronave está voando a ${speed} km/h.`)
    }
  }
  
  const carroPreto = new Car()
  const navioBranco = new Ship()
  const aeronaveAzul= new Aircraft()

  //@ chamei o metodo com resultado diferente
  
  carroPreto.move()
  navioBranco.move()
  aeronaveAzul.move(80)