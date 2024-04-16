//! pego todas as informação dos inputs

/*
<body>
  <h1>Trabalhando Com Formulários</h1>
  <hr>

  <h2>Montar Pedido</h2>

  <form id="orderForm">
    <label for="name">Nome:</label>
    <br>
    <input type="text" name="name" id="name">
    <br><br>

    <label for="address">Endereço de Entrega:</label>
    <br>
    <input type="text" name="address" id="address">
    <br><br>

    <label for="breadType">Tipo de Pão</label>
    <br>
    <select name="breadType" id="breadType">
      <option selected disabled>Selecione uma opção...</option>
      <option value="3 queijos">3 queijos</option>
      <option value="Parmesão e orégano">Parmesão e orégano</option>
      <option value="9 grãos">9 grãos</option>
      <option value="Italiano branco">Italiano branco</option>
      <option value="Granola salgada">Granola salgada</option>
      <option value="Manteiga temperada">Manteiga temperada</option>
    </select>
    <br><br>

    <label for="main">Principal:</label>
    <br>
    <input type="radio" name="main" id="main1" value="Carne">
    <label for="main1">Carne</label>
    <input type="radio" name="main" id="main2" value="Frango">
    <label for="main2">Frango</label>
    <input type="radio" name="main" id="main3" value="Vegano">
    <label for="main3">Vegano</label>
    <br><br>

    <label for="salad">Salada:</label>
    <br>
    <input type="checkbox" name="salad" id="salad1" value="Alface">
    <label for="salad1">Alface</label>
    <input type="checkbox" name="salad" id="salad2" value="Tomate">
    <label for="salad2">Tomate</label>
    <input type="checkbox" name="salad" id="salad3" value="Azeitonas">
    <label for="salad3">Azeitonas</label>
    <input type="checkbox" name="salad" id="salad4" value="Cenoura">
    <label for="salad4">Cenoura</label>
    <input type="checkbox" name="salad" id="salad5" value="Picles">
    <label for="salad5">Picles</label>
    <br><br>

    <label for="observations">Observações:</label>
    <br>
    <textarea name="observations" id="observations" cols="30" rows="6"></textarea>
    <br><br>

    <button type="submit">Fechar Pedido</button>
  </form>
</body>
*/
const form = document.getElementById("orderForm") //|pego o form

form.addEventListener("submit", function (ev) {
  ev.preventDefault() //* para evitar o carregamento da pagina e peder os dados, evita o comportamento padrão
//| pego todos os inputs
  const name = document.querySelector("input[name='name']").value //* tem outras forma de selecionar, nao se espante com [name = "name"]
  const address = document.querySelector("input[name='address']").value
  const breadType = document.querySelector("select[name='breadType']").value //* no select,  devolve o value, valor da opção marcada
  const main = document.querySelector("input[name='main']").value //* devolve o input marcado
  const observations = document.querySelector("textarea[name='observations']").value

  //| em  checkbox, tem varias opção que pode ser marcada, lembra que eles tem que ter um nome igual, cria uma let com esse nome
  let salad = ""
  //*:checked, pego os marcados
  document.querySelectorAll("input[name='salad']:checked").forEach(function (item) {
    salad += " - " + item.value + "\n"
  })

  console.log({
    name,
    address,
    breadType,
    main,
    salad,
    observations
  })

  alert(
    "Pedido Realizado!" +
    "\nNome do cliente: " + name +
    "\nEndereço de entrega: " + address +
    "\nTipo de pão: " + breadType +
    "\nRecheio: \n - " + main + "\n" + salad +
    "Observações: " + observations
  )
})