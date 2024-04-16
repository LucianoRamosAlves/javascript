//@ ------------- html------------------

/*<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Recursos de Armazenamento do Navegador</title>
  <script src="./index.js" defer></script>
</head>
<body>
  <h1>Recursos de Armazenamento do Navegador</h1>
  <hr>
  <h2>Session Storage</h2>
  <label for="session">Digite uma informação:</label>
  <input type="text" id="session">
  <button id="sessionBtn">Guardar!</button>
  <button id="readSesssion">Ler</button>
  <h2>Local Storage</h2>
  <label for="local">Digite uma informação:</label>
  <input type="text" id="local">
  <button id="localBtn">Guardar!</button>
  <button id="readLocal">Ler</button>
  <h2>Cookies</h2>
  <label for="cookie">Digite uma informação:</label>
  <input type="text" id="cookie">
  <button id="cookieBtn">Guardar!</button>
  <br><br>
  <label for="cookie2">Digite uma informação:</label>
  <input type="text" id="cookie2">
  <button id="cookie2Btn">Guardar!</button>
</body>
</html>*/

//@ -------Usando o sessionStorage - dados salvos no input por exemplo são apagados ao fechar a pagina

document.getElementById('sessionBtn').addEventListener('click', function () {
    const input = document.getElementById('session')
    sessionStorage.setItem('info', input.value)
    input.value = ''
  })
  //| para ler a inform
  document.getElementById('readSesssion').addEventListener('click', function () {
    const info = sessionStorage.getItem('info')
    alert('A informação salva é: ' + info)
  })

 //@  Usando o localStorage
document.getElementById('localBtn').addEventListener('click', function () {
  const input = document.getElementById('local')
  localStorage.setItem('text', input.value)
  input.value = ''
})

document.getElementById('readLocal').addEventListener('click', function () {
  const t = localStorage.getItem('text')
  alert('O texto salvo no local storage é: ' + t)
})

 //@ Usando cookies
document.getElementById('cookieBtn').addEventListener('click', function () {
  const input = document.getElementById('cookie')
  // cookieName=value; expires=UTCStringDate; path=/;
  const cookie = 'info=' + input.value + ';'
  const expiration = 'expires=' + new Date(2022,9, 9) + ';'
  const path = 'path=/;'
  document.cookie = cookie + expiration + path
  input.value = ''
  console.log(document.cookie)
})

document.getElementById('cookie2Btn').addEventListener('click', function () {
  const input = document.getElementById('cookie2')
  // cookieName=value; expires=UTCStringDate; path=/;
  const cookie = 'text=' + input.value + ';'
  const expiration = 'expires=' + new Date(2022, 8, 9) + ';'
  const path = 'path=/;'
  document.cookie = cookie + expiration + path
  input.value = ''
  console.log(document.cookie)
})