 export default function calculate() {
    const resultInput = document.getElementById("result") 
    //! como esse elemento tava pego fora da função, tenho que pegar ele de novo
    resultInput.value = "ERROR" //* tratar error do  eval , todas vez que a função calcukate for chamada a primeira coisa que ela vai fazer é chamar que ERRO, escrever erro no resultado da calculadora
    resultInput.classList.add("error") //* class estilização erro
    const result = eval(input.value) //* executa o codigo,pega o numero do input e analisa, não é preciso criar cada função a botao se soma, dividir etc.. mas essa aplicação é perigosa, pois da brecha dde segurança
    resultInput.value = result
    resultInput.classList.remove("error") //* se o codigo acima funcionar ou seja o val não tiver problemas, ele segue o codigo e chega até aqui e remove o erro deixando o resultado , se nao funcionar ele não chega aqui e não removesse essa class e aparece erro estilizado la no input. 
    //! mas essa não é forma correta de tratar errro, futuramente irá aprender
  }