export class Component { //* exporte pois vou usar em outro lugar
    #element = null //* coloco como privado, pois assim ele não vai ser manipulado, apenas pelos metodos que eu disponibilizae
  
    constructor(tag, parent, options) {
      this.tag = tag
      this.parent = parent
      this.options = options
      this.build()
    }
  
    getElement() {
      return this.#element //* não é relevante, mas com esse metodo, torno algo privado em publico, para chamar em outro lugar,  mas é somente para leituras, o arquivo privado privado continua protegido
    }
  
    build() {//* metodo que cria um elemento com as informações criada no constructor
      this.#element = document.createElement(this.tag) 
      Object.assign(this.#element, this.options) //* pego todas as  options e passo para o elemento, usao o object . assingn,  passo dois paramentros o destino , e o que vai ser passado para o destino, todo options é passado para o elemnet
      return this
    }
  
    render() { //* faz o elemente aparecer na tela
      if (this.parent instanceof Component) {
        this.parent.getElement().append(this.#element) //* não é muito relevante
      } else {
        document.querySelector(this.parent).append(this.#element)
      }
    }
  }