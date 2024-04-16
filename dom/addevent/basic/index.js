/*<body>
  <h1>Trabalhando com Eventos no Javascript</h1>
  <hr>

  <h2>Registre-se!</h2>
  <section>
    <label for="username">Nome de Usuário:</label>
    <input type="text" name="username" id="username">
    <br>
    <label for="password">Senha:</label>
    <input type="password" name="password" id="password">
    <br>
    <label for="passwordConfirmation">Confirme sua senha:</label>
    <input type="password" name="passwordConfirmation" id="passwordConfirmation">
    <br>
    <button id="register-button">Registrar</button> //* veja que eu não coloquei onclick, fiz no js
    <button onclick="removeEvent()">Remover Event Listener</button>
  </section>*/

  function register(ev) {
    console.log(ev)
    //*para pegar os elementos , olhe a pasta pegar dados
    const sectionElement = ev.currentTarget.parentNode //@ pego o botão
    const username = sectionElement.children.username.value
    const password = sectionElement.children.password.value
    const passwordConfirmation = sectionElement.children.passwordConfirmation.value
    if (password === passwordConfirmation) {
      alert("Usuário " + username + " registrado!")
    } else {
      alert("As senhas não conferem")
    }
  }
  
  function removeEvent() {
    button.removeEventListener("click", register)
    alert("Event Removed")
  }
  
  const button = document.getElementById("register-button")
  
  button.addEventListener("click", register) //* click com a função register criado a cima
  
  button.addEventListener("mouseover", function (ev) {
    console.log(ev)
  })