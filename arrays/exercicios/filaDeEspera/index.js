let fila = []
let opcao = ""

do {
  let pacientes = "" //* pra mostrar os pacientes
  for (let i = 0; i < fila.length; i++) {
    pacientes += (i + 1) + "º - " + fila[i] + "\n" //* pego o nome do paciente na array fila e coloco e cocateno na let pacienets para mostrar na tela,,, i + 1 isso é por que , para não comecar a contar do indice zero
  }

  opcao = prompt(
    "Pacientes:\n" + pacientes +
    "\nEscolha uma ação:\n1 - Novo paciente\n2 - Consultar paciente\n3 - Sair"
  )

  switch (opcao) {
    case "1":
      const novoPaciente = prompt("Qual é o nome do paciente?")
      fila.push(novoPaciente)
      break
    case "2":
        //* removo o  primeiro paciente da fila, como tem que exibir qual pacienete foi removido, tenho que salava esse pacinete removido em uma variavel
      const pacienteConsultado = fila.shift()
      if (!pacienteConsultado) {
        //* se pacienteconsultado tiver vazio, vamos la, se tiver string nessa let pacienteconsultado retorna verdadeiro , true , então eu coloco ! , para mudar , se der vazio retorna false
        alert("Não há pacientes na fila!")
      } else {
        alert(pacienteConsultado + " foi removido da fila.")
      }
      break
    case "3":
      alert("Encerrando...")
      break
    default:
      alert("Opção inválida!")
      break
  }
} while (opcao !== "3");