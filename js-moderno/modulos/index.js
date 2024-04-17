//* modulo é uma forma de organizar um codigo,  imagina uma unica pasta index.js com centenas de funções, eu crio um modulo , um grupo de função que faz a mesma coisa e coloco em outra pasta, assim fica mais facil a manutenção, codigo mais limpo
//* imagine um supermercado com setores, setor de frutas, higiene, frios etc.. todos fazem parte do supermercado , mas estão separados por função

import { input, label } from "./export"


//@ veja , temos varios funcçao de deferemtes tipos, crio outra pasta index e exporto e importo

//! vou importar essas funções da outra pasta
/*function label(attributes) {
    const element = document.createElement('label')
    Object.assign(element, attributes)
    return element
  }
  
  function input(attributes) {
    const element = document.createElement('input')
    Object.assign(element, attributes)
    return element
  }
  */  

  import { label, input } from "./export.js"
  //* pronto, as 2 funções da outra pasta já esta funcionando, 
  function br() {
    const element = document.createElement('br')
    return element
  }
  
  console.log(label({ for: 'fullname', textContent: 'Nome Completo'}))
  console.log(input({ id: 'fullname', name: 'fullname', placeholder: 'Digite seu nome completo...'}))
  console.log(br())