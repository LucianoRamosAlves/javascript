 //* Dentro do script, antes de ir adiante, vamos criar um array no escopo mais externo para armazenar as vagas salvas:
const vagas = []
//*Depois podemos começar a escrever as funções que vamos ter no programa. A primeira delas é a função de listas as vagas:
function listarVagas() {
    //| vagas em texto , mais facil para concatenar textos
  const vagasEmTexto = vagas.reduce((textoFinal, vaga, indice) => {
    // concatenar com o indice para ficar 1. nome,quantidade ou seja textofinal
    textoFinal += indice + ". "
    textoFinal += vaga.nome //* como vagas vai ter varios paramentos, coloca.nome
    // aqui a baixo vai ter o array de candidatos dentro de vagas, salvo varios candidatos, e length para pegar seu tamanho
    textoFinal += " (" + vaga.candidatos.length + " candidatos)\n"
    return textoFinal
  }, "") //* "" ta vazio pois é o valor incial do texto final

  alert(vagasEmTexto)
}

//*E então a função de adicionar uma nova vaga:
function novaVaga() {
  const nome = prompt("Informe um nome para a vaga:")
  const descricao = prompt("Informe um descrição para a vaga:")
  const dataLimite = prompt("Informe um data limite (dd/mm/aaaa) para a vaga:")

  const confirmacao = confirm(
    "Deseja criar uma nova vaga com essas informações?\n" +
    "Nome: " + nome + "\nDescrição: " + descricao + "\nData limite: " + dataLimite
  )

  if (confirmacao) {
    //* lembre-se ,  nome, é mesma coisa que nome: nome
    const novaVaga = { nome, descricao, dataLimite, candidatos: [] }
    vagas.push(novaVaga)
    alert("Vaga criada.")
  }
}
//*  Vamos criar também uma função para exibir uma vaga:
function exibirVaga() {
  const indice = prompt("Informe o índice da vaga que deseja exibir:")
  if(indice >= vagas.length || indice< 0) {
    alert("indice invalido")
    return
    //*caso quero mostrar uma vaga que não existe, o retorn finaliza, se cair nesse if, ele finaliza
  }
  const vaga = vagas[indice]

  const candidatosEmTexto = vaga.candidatos.reduce((textoFinal, candidato) => textoFinal + "\n - " + candidato, "")

  alert(
    "Vaga nº " + indice +
    "\nNome: " + vaga.nome +
    "\nDescrição: " + vaga.descricao +
    "\nData limite: " + vaga.dataLimite +
    "\nQuantidade de candidatos: " + vaga.candidatos.length +
    "\nCandidatos inscritos:" + candidatosEmTexto
  )
}
//* A função de inscrever um candidato em uma vaga:
function inscreverCandidato() {
  const candidato = prompt("Informe o nome do(a) candidato(a):")
  const indice = prompt("Informe o índice da vaga para a qual o(a) candidato(a) deseja se inscrever:")
  const vaga = vagas[indice]

  const confirmacao = confirm(
    "Deseja inscrever o candidato " + candidato + " na vaga " + indice + "?\n" +
    "Nome: " + vaga.nome + "\nDescrição: " + vaga.descricao + "\nData limite: " + vaga.dataLimite
  )

  if (confirmacao) {
    vaga.candidatos.push(candidato)
    alert("Inscrição realizada")
  }
}
//* A função de excluir uma vaga:
function excluirVaga() {
  const indice = prompt("Informe o índice da vaga que deseja excluir:")
  const vaga = vagas[indice]

  const confirmacao = confirm(
    "Tem certeza que deseja excluir a vaga " + indice + "?\n" +
    "Nome: " + vaga.nome + "\nDescrição: " + vaga.descricao + "\nData limite: " + vaga.dataLimite
  )

  if (confirmacao) {
    vagas.splice(indice, 1)
    alert("Vaga excluída.")
  }
}
//* Uma função para exibir o menu e obter a opção escolhida pelo usuário:
function exibirMenu() {
  const opcao = prompt(
    "Cadastro de Vagas de Emprego" +
    "\n\nEscolha uma das opções" +
    "\n1. Listar vagas disponíveis" +
    "\n2. Criar uma nova vaga" +
    "\n3. Visualizar uma vaga" +
    "\n4. Inscrever um(a) candidato(a)" +
    "\n5. Excluir uma vaga" +
    "\n6. Sair"
  )

  return opcao
}
//* E por fim vamos criar uma função principal para executar nossa aplicação e então chamar essa mesma função no escopo mais externo, para que ela execute assim que o script for carregado:
function executar() {
  let opcao = ""

  do {
    opcao = exibirMenu()

    switch (opcao) {
      case "1":
        listarVagas()
        break
      case "2":
        novaVaga()
        break
      case "3":
        exibirVaga()
        break
      case "4":
        inscreverCandidato()
        break
      case "5":
        excluirVaga()
      case "6":
        alert("Saindo...")
        break
      default:
        alert("Opção inválida.")
    }

  } while (opcao !== "6");
}

executar()