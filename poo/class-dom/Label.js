import { Component } from "./Component.js";

export class Label extends Component {
  constructor(text, parent, options) {
    super('label', parent, Object.assign({}, options, { textContent: text })) //* crio uma chave vazia, objeto vazio e posso passar qualquer coisa para dentro, não só os parametos, textcontent , atribui o texto que a gente passou, cria uma label com o texto que a gente passou
  }
}