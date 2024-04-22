import { Component } from "./Component.js";

export class Form extends Component {
  constructor(parent, options) {
    super('form', parent, options)
  }

  addChildren(...children) { //* para  adcionar filhos dentro do form
    children.forEach(child => {
      this.getElement().appendChild(child.getElement()) //| em arroyfacntion, não tem o this, não pega da propria função ou seja, esse this faz refeência no elemento constructor acima, 
    })
  }
}