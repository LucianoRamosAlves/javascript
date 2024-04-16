/*
 <script src="./index.js" defer></script>
//* esse defer atrasa o carregamento do script, mesma   coiisa que colocar o script no final
<body>
  <h1>Exercício 12 - Cadastro de Devs</h1>
  <hr>

  <h2>Cadastrar Novo Desenvolvedor</h2>

  <form id="devForm">
    <label for="fullname">Nome Completo:</label>
    <input type="text" name="fullname" id="fullname"><br><br>
    
    <label>Tecnologias:</label><br>
    <button id="addTechBtn" type="button">Adicionar Nova</button>
    <ul id="stackInputs"></ul>
    <br>
    <button type="submit">Cadastrar</button>
  </form>
</body>*/

//*Agora, para o javascript, vamos começar criando algumas funções auxiliares para agilizar o processo de criação dos elementos, já que faremos isso várias vezes:

//| essa função vai receber como parametro um texto e htmlfor, que é a for da label
//@ aqui é para o botão adicinar
function createLabel(text, htmlFor) {
  const label = document.createElement('label')
  label.htmlFor = htmlFor
  label.innerText = text
  return label
}

function createInput(id, value, name, type = 'text', placeholder = '') {
  const input = document.createElement('input')
  input.id = id
  input.value = value
  input.name = name
  input.type = type
  input.placeholder = placeholder
  return input
}

//* Vamos criar algumas várias globais úteis para a resolução:
const addTechBtn = document.getElementById('addTechBtn')
const form = document.getElementById('devForm')
const developers = [] //| aonde vamos colocar os desenvolvidores, cadrastar
let inputRows = 0 //| numeros de tecnologia , numero de linhas


//* Agora vamos criar o evento do botão que adiciona os novos campos no formulário:

//* nessa função vamos criar e colocar na tela
addTechBtn.addEventListener('click', function (ev) {
  const stackInputs = document.getElementById('stackInputs') //| pego a tag ul

  const newRow = document.createElement('li')
  const rowIndex = inputRows //| é o indice de cada intem da lista, cada element li, e comeca em zero, como declarado na let acima
  inputRows++ //| aumenta o indice para li cada criada
  newRow.id = 'inputRow-' + rowIndex //| cria um novo id ,usando o aumento acima, cada elemento tem o id usando o indice
  newRow.className = 'inputRow'

  const techNameLabel = createLabel('Nome: ', 'techName-' + rowIndex)
  const techNameInput = createInput('techName-' + rowIndex, null, 'techName')

  //| lembra que essa creat label passei 2 paramentors no começo, texto label e o nome for
  //@ aqui cria a opção radio
  const expLabel = createLabel('Experiência: ')
  const id1 = 'expRadio-' + rowIndex + '.1'
  const expRadio1 = createInput(id1, '0-2 anos', 'techExp-' + rowIndex, 'radio')
  const expLabel1 = createLabel('0-2 anos', id1)
  const id2 = 'expRadio-' + rowIndex + '.2'
  const expRadio2 = createInput(id2, '3-4 anos', 'techExp-' + rowIndex, 'radio')
  const expLabel2 = createLabel('3-4 anos', id2)
  const id3 = 'expRadio-' + rowIndex + '.3'
  const expRadio3 = createInput(id3, '5+ anos', 'techExp-' + rowIndex, 'radio')
  const expLabel3 = createLabel('5+ anos', id3)

  const removeRowBtn = document.createElement('button')
  removeRowBtn.type = 'button'
  removeRowBtn.innerText = 'Remover'
  removeRowBtn.addEventListener('click', function () {
    stackInputs.removeChild(newRow)
  })

//| acrescenta varios filhos, nesse caso da li
  newRow.append(
    techNameLabel, techNameInput, expLabel, expRadio1, expLabel1, expRadio2, expLabel2, expRadio3, expLabel3, removeRowBtn
  )

  stackInputs.appendChild(newRow)
})

 //* Por fim, vamos adicionar o evento de submissão do formulário:
form.addEventListener('submit', function (ev) {
  ev.preventDefault()
//| pego os elementos
  const fullnameInput = document.getElementById('fullname')
  const inputRows = document.querySelectorAll('.inputRow')

  let technologies = [] //| vai amazenar as informaçao que foi preenchida no formulário
  inputRows.forEach(function (row) {
    // #rowId input[name="techName"]
    //| pega o id esse row.id e pego o input com o nome techname
    const techName = document.querySelector('#' + row.id + ' input[name="techName"]').value
    const techExp = document.querySelector('#' + row.id + ' input[type="radio"]:checked').value
    technologies.push({ name: techName, exp: techExp })
  })

  const newDev = { fullname: fullnameInput.value, technologies: technologies }
  //* esse developers é o mesmo da const criado acima
  developers.push(newDev)
  alert('Dev cadastrado com sucesso!')

  fullnameInput.value = '' //| fica vazio pra recomecar a inserção
  inputRows.forEach(function (row) {
    row.remove()
  })

  console.log(developers)
})