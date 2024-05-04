//** aparece pelo menos uma vez, um comando é executado indepedenete sse for verdadeiro */

//? esse pg vai opcões e ao escolher a opção encerrsr o pg finaliza

let opcao = ""; //* para conctenar

do { //* veja que executa isso uma vez
    opcao = prompt(
      "Seja bem-vindo(a)!\n" +
      "\nEscolha uma das opções abaixo:" +
      "\n1 - Opção Um" +
      "\n2 - Opção Dois" +
      "\n3 - Opção Três" +
      "\n4 - Opção Quatro" +
      "\n5 - Encerar"
    )
    switch (opcao) {
        case "1":
          alert("Você escolheu a opção 1.")
          break
        case "2":
          alert("Você escolheu a opção 2.")
          break
        case "3":
          alert("Você escolheu a opção 3.")
          break
        case "4":
          alert("Você escolheu a opção 4.")
          break
        case "5":
          alert("Encerrando o programa...")
          break
        default:
          alert("Entrada inválida! Escolha uma das cinco opções.")
      }
  
  } while (opcao !== "5"); //! preste atenção , essa repetição acontece se caso for escolhido qualque numero diferenete de 5 , foi o termo que eu coloquei, mas se eu escolher o 5 , fecha o probgrama , e 5 é a opção de encerrar 

  ///-----------------------------------------------------

  let saldo = parseFloat(prompt("Informe a quantidade de dinheiro inicial:"))
let opcao0 = ""

do {
  opcaoo = prompt(
    "Saldo disponível: R$ " + saldo +
    "\n1 - Adicionar dinheiro" +
    "\n2 - Remover dinheiro" +
    "\n3 - Sair"
  )
  switch (opcaoo) {
    case "1":
      saldo += parseFloat(prompt("Informe o valor a ser adicionado:")) //* pego o saldo e soma com o prompt += , caso 1 é a opção de somar
      break
    case "2":
      saldo -= prompt("Informe o valor a ser removido:")
      break
    case "3":
      alert("Saindo...") //* pois a condição é qualque numero diferente de 3, se 3 , encerra
      break
    default:
      alert("Entrada inválida.") //* caso digite outra coisa
      break
  }

} while (opcao !== "3");