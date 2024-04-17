export default function (ev) {
    const resultInput = document.getElementById("result")
    const button = ev.currentTarget //* pego nosso botão
    if (button.innerText === "Copy") { //* se o nome tiver la for copy então significa que não foi copiado
      button.innerText = "Copied!"
      button.classList.add("success") //* adicono uma class para estilizar quando for copiado
      navigator.clipboard.writeText(resultInput.value) //* isso serve para copiar, funcionalidade do window
    } else { //* se nao tiver copy lá, significa que foi copiado, então retorno para copy e tiro a class 
      button.innerText = "Copy"
      button.classList.remove("success")
    }
  }

  //! verifica se tem depedencia, se  tem que pegar um element document, nrsse caso precisei