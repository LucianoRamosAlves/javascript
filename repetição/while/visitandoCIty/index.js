/*No script, vamos primeiro obtendo o nome do turista e então inicializar as variáveis de contagem e nomes das cidades:*/
const turista = prompt("E aí, turista! Qual é o seu nome?")
let cidades = ""
let contagem = 0
/*Depois podemos perguntar se alguma cidade foi visitada:*/
let continuar = prompt("Você visitou alguma cidade? (Sim/Não)")
/*E então usamos o while para perguntar o nome da cidade, adicionar essa cidade às visitadas e então perguntar novamente se alguma outra cidade foi visitada. Isso vai continuar enquanto a resposta for “Sim”:*/
while (continuar === "Sim") {
  let cidade = prompt("Qual é o nome da cidade visitada?")
  cidades += " - " + cidade + "\n"
  contagem++
  continuar = prompt("Você visitou alguma outra cidade? (Sim/Não)")
}
/*Por último só precisamos exibir a mensagem final:*/
alert(
  "Turista: " + turista +
  "\nQuantidade de cidades visitadas: " + contagem +
  "\nCidades visitadas:\n" + cidades
)