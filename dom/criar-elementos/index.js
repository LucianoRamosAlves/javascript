//? --------------no html--------
<body>
  <h1>Criando Novos Elementos no DOM</h1>

  <button onclick="addInput()">Adicionar Input</button>

  <ul id="inputs"></ul> //* crio essa caixa ul pra criar meus li
</body>
//? ---------------- js------
 function addInput() {
    const ul = document.getElementById('inputs')
  
    const newLi = document.createElement('li')
    //* tenho varios atributod de criação
    newLi.className = 'list-item'
    newLi.innerText = 'Novo input: '
  
    const newInput = document.createElement('input') //* crio a input que vai dentro do li criado acima
    newInput.type = 'text'
    newInput.name = 'input'

    //* mas não pode ficar solto, veja que um é a tag pai,outro filho, tem que organizar 
  
    newLi.appendChild(newInput) //* newinput é filho da newli
    ul.appendChild(newLi) //* newli é filho da ul
  }
