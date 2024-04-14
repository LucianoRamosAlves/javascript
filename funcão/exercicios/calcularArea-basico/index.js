 //?Como de costume, começamos criando a página e o script:
 //?Agora vamos criar cada uma das funções responsáveis pelos cálculos das áreas, começando pelo triângulo:
function calcularAreaTriangulo() {
  const base = parseFloat(prompt("Informe a base do triângulo:"))
  const altura = parseFloat(prompt("Informe a altura do triângulo:"))
  return base * altura / 2
}
 //?Depois criamos a função para calcular a área do retângulo;
function calcularAreaRetangulo() {
  const base = parseFloat(prompt("Informe a base do retângulo:"))
  const altura = parseFloat(prompt("Informe a altura do retângulo:"))
  return base * altura
}
 //?E a função para a área do quadrado:
function calcularAreaQuadrado() {
  const lado = parseFloat(prompt("Informe a área do quadrado:"))
  return lado * lado
}
 //?E do trapézio:
function calcularAreaTrapezio() {
  const baseMenor = parseFloat(prompt("Informe a base menor do trapézio:"))
  const baseMaior = parseFloat(prompt("Informe a base maior do trapézio:"))
  const altura = parseFloat(prompt("Informe a altura do trapézio:"))
  return (baseMaior + baseMenor) * altura / 2
}
 //?E do círculo:
function calcularAreaCirculo() {
  const raio = parseFloat(prompt("Informe o raio do círculo:"))
  return (3.14 * raio * raio)
}
 //?Agora vamos criar uma função para exibir um menu e devolver o resultado escolhido nesse menu:
function exibirMenu() {
  return prompt(
    "Calculadora Geométrica\n" +
    "1. Calcular área de triângulo\n" +
    "2. Calcular área de retângulo\n" +
    "3. Calcular área de quadrado\n" +
    "4. Calcular área de trapézio\n" +
    "5. Calcular área de círculo\n" +
    "6. Sair\n"
  )
}
 //?E, para concluir, vamos criar uma função para cuidar da execução do nosso programa, chamando todas as outras funções quando necessário:
function executar() {
  let opcao = ""

  do {
    opcao = exibirMenu()
    let resultado
     //? para colocar a resposta nessa let resultado

    switch (opcao) {
      case "1":
        resultado = calcularAreaTriangulo()
        break
      case "2":
        resultado = calcularAreaRetangulo()
        break
      case "3":
        resultado = calcularAreaQuadrado()
        break
      case "4":
        resultado = calcularAreaTrapezio()
        break
      case "5":
        resultado = calcularAreaCirculo()
        break
      case "6":
        alert("Saindo...")
        break
      default:
        alert("Opção inválida!")
        break
    }

    if (resultado) {
      alert("Resultado: " + resultado)
       //?para mostrar o resultado
    }

  } while (opcao !== "6");
}
 //?Agora só falta realmente chamar a função executar() para que nosso programa funcione:
executar()