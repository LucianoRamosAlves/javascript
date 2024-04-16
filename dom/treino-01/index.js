//!---------------------agenda---pratica de manipulacao
//*------adicionar e remover-------------
//* quando clico em adicionar , aparece o input do nome,telefone e endereco

//@ -------no html------------------
/*<body>
  <h1>Praticando a Manipulação do DOM</h1>
  <hr>

  <h2>Minha Agenda</h2>

  <button onclick="addContact()">Novo Contato</button>
  <button onclick="removeContact()">Remover Contato</button>

  <section id="contacts-list"></section>
</body>*/

//@ js--------------------

function addContact() {
  const contactSection = document.getElementById('contacts-list')

  const h3 = document.createElement('h3')
  h3.innerText = "Contato"

  const ul = document.createElement('ul')

  const nameLi = document.createElement('li')
  nameLi.innerText = "Nome: "
  const nameInput = document.createElement('input')
  nameInput.type = 'text'
  nameInput.name = 'fullname'
  nameLi.appendChild(nameInput)
  ul.appendChild(nameLi)
  ul.appendChild(document.createElement('br')) //* pular linha

  const phoneLi = document.createElement('li')
  phoneLi.innerText = "Telefone: "
  const phoneInput = document.createElement('input')
  phoneInput.type = 'text'
  phoneInput.name = 'phone'
  phoneLi.appendChild(phoneInput)
  ul.appendChild(phoneLi)
  ul.appendChild(document.createElement('br'))

  const addressLi = document.createElement('li')
  addressLi.innerHTML = '<label for="address">Endereço: </label>' //*cria uma label 
  const addressInput = document.createElement('input')
  addressInput.type = 'text'
  addressInput.name = 'address'
  addressInput.id = 'address' //* criei uma label a cima, id tem q ser igual ao for
  addressLi.appendChild(addressInput)
  ul.appendChild(addressLi)
  ul.appendChild(document.createElement('br'))

  contactSection.append(h3, ul)
}

function removeContact() {
  const contactSection = document.getElementById('contacts-list')

  const titles = document.getElementsByTagName('h3')
  const contacts = document.getElementsByTagName('ul')

  //@ exclui o ultimo 
  contactSection.removeChild(titles[titles.length - 1])
  contactSection.removeChild(contacts[contacts.length - 1])
}