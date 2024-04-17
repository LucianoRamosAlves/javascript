export   function input(attributes) {
    const element = document.createElement('input')
    Object.assign(element, attributes)
    return element
  }

export function label(attributes) {
    const element = document.createElement('label')
    Object.assign(element, attributes)
    return element
  }

  //* tipos de importação 

  //| export default --  para eu colocar outro nome na importação
  //| na importação coloco -- import defaultInline from "endereço do arquivo" ou poderia colocar o nome que eu quiser, o importante , é o emdereço ex: import exemplo from "endereço do arquivo"

  //* no projeto calc-basic tem a pratica