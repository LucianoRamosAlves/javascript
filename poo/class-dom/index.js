//! Arquivos index.js e index.html para testes

import { Component } from "./Component.js"
import { Form } from "./Form.js"
import { Input } from "./Input.js"
import { Label } from "./Label.js"

const el = new Component('h1', 'body', { innerText: 'Olá, Mundo!' }) //* crio um h1, ele cai no body
console.log(el)
el.render()

el.tag = 'h2' //* cria um h2, brince criando outras tags
el.build().render() //* constroi e redenriza


const form = new Form('body')

const label = new Label('Nome:', form, { htmlFor: 'nameInput' })
const input = new Input(form, { id: 'nameInput', name: 'birthday' })

form.render()

label.render()
form.addChildren(input)

form.addChildren(
  new Component('br'),
  new Component('br'),
  new Label('Data de Nascimento:', { htmlFor: 'birthdayInput'}),
  new Input(form, { id: 'birthdayInput', name: 'birthday', type: 'date' })
)