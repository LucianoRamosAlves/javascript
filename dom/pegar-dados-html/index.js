//* envio dados para o js

/*<body>
  <h1>Enviando Valores do DOM para o Javascript</h1>
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
    função register , registrar, e com o parametro this eu referencio os proprios elementos que esta na tela e parentnode acessa o pai do section
    <button onclick="register(this.parentNode)">Registrar</button>
  </section>
</body>

 */

function register(element) {
    const username = element.children.username.value
    const password = element.children.password.value
    const passwordConfirmation = element.children.passwordConfirmation.value
  
    if (password === passwordConfirmation) {
      alert("Usuário " + username + " registrado!")
    } else {
      alert("As senhas não conferem")
    }
  }