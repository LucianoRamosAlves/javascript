module.exports = class Order { //* class para armazenar os pedidos
    #total //* valor total do pedido
    #items //* p produto e a quantidade
    #user //* usuario que fez o pedido
  
    constructor(items, user) {
      items.forEach(({ product, quantity }) => { //* desistrutoro
        if (quantity > product.inStock) {
          throw new Error('Quantidade insuficiente em estoque!')
        }
      })
      this.#items = items
      this.#user = user
      this.#total = items.reduce((sum, { product, quantity }) => sum + (product.price * quantity), 0) //* reduce, tem o valor acumulado, que chamei de sum
    }
  
    get data() { //* metodo para acessar os valores privados
      return {
        items: this.#items,
        user: this.#user,
        total: this.#total
      }
    }
  }