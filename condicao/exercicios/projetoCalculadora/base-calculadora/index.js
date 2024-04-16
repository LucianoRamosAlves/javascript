//@ pego os elementos que vou usar
const main = document.querySelector("main")
const root = document.querySelector(":root")
const input = document.getElementById("input")
const resultInput = document.getElementById("result")
const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]
//@ crio um array com todas as teclas que eu quero permitir que seja digitada

//* hora de adicinar eventos a todos os botão
document.querySelectorAll(".charKey").forEach(function (charKeyBtn) {
  charKeyBtn.addEventListener("click", function () {
    const value = charKeyBtn.dataset.value //| dataset é que eu uso para aceesar o valor da data-value
    input.value += value
  })
})

document.getElementById("clear").addEventListener("click", function () {
  input.value = ""
  input.focus()
})

//@ adiciono um evento, keydown é tecla pra baixo 
input.addEventListener("keydown", function (ev) {
  ev.preventDefault() //@ previne o comportamento padrão dessa função, se apertar a tecla não quero que seja inserido o valor daquela tecla no input pois quero controlar manualmente o que vai ser colocado no input
  if (allowedKeys.includes(ev.key)) { //@ se o array allowedkeys criado a cima bate com a tecla com que o usuario prencionou (ev.key)
    input.value += ev.key //@ se tiver incluso nas teclas validas ,essa tecla(ev.key) é acrescenta no input.value 
                          //? veja que estamos controlando manualmente no input
    return
  }

  //! colocando outros botões manualmente
  if (ev.key === "Backspace") { //@ botão de apagar 1 numero
    input.value = input.value.slice(0, -1) //@ esclui o ultimo
  }
  if (ev.key === "Enter") {
    calculate()
  }
})

document.getElementById("equal").addEventListener("click", calculate) //* botão de igual, passei a function click e calcular

function calculate() {
  resultInput.value = "ERROR" //* tratar error do  eval , todas vez que a função calcukate for chamada a primeira coisa que ela vai fazer é chamar que ERRO, escrever erro no resultado da calculadora
  resultInput.classList.add("error") //* class estilização erro
  const result = eval(input.value) //* executa o codigo,pega o numero do input e analisa, não é preciso criar cada função a botao se soma, dividir etc.. mas essa aplicação é perigosa, pois da brecha dde segurança
  resultInput.value = result
  resultInput.classList.remove("error") //* se o codigo acima funcionar ou seja o val não tiver problemas, ele segue o codigo e chega até aqui e remove o erro deixando o resultado , se nao funcionar ele não chega aqui e não removesse essa class e aparece erro estilizado la no input. 
  //! mas essa não é forma correta de tratar errro, futuramente irá aprender
}

document.getElementById("copyToClipboard").addEventListener("click", function (ev) {
  const button = ev.currentTarget //* pego nosso botão
  if (button.innerText === "Copy") { //* se o nome tiver la for copy então significa que não foi copiado
    button.innerText = "Copied!"
    button.classList.add("success") //* adicono uma class para estilizar quando for copiado
    navigator.clipboard.writeText(resultInput.value) //* isso serve para copiar, funcionalidade do window
  } else { //* se nao tiver copy lá, significa que foi copiado, então retorno para copy e tiro a class 
    button.innerText = "Copy"
    button.classList.remove("success")
  }
})

document.getElementById("themeSwitcher").addEventListener("click", function () {
  if (main.dataset.theme === "dark") {
    //* peguei esse root la em cima
    root.style.setProperty("--bg-color", "#f1f5f9") //* setProperty é pra eu acessar uma propiedade
    root.style.setProperty("--border-color", "#aaa")
    root.style.setProperty("--font-color", "#212529")
    root.style.setProperty("--primary-color", "#26834a")
    main.dataset.theme = "light"
  } else {
    root.style.setProperty("--bg-color", "#212529")
    root.style.setProperty("--border-color", "#666")
    root.style.setProperty("--font-color", "#f1f5f9")
    root.style.setProperty("--primary-color", "#4dff91")
    main.dataset.theme = "dark"
  }
})