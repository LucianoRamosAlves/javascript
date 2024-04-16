// Variáveis globais úteis
const boardRegions = document.querySelectorAll('#gameBoard span') //? pegar os spam
let vBoard = [] //? criar um tabuleiro virtual e verificar o tabuleiro real
let turnPlayer = '' //? jogador da vez

//? função para mostrar o jogador da vez
function updateTitle() {
  const playerInput = document.getElementById(turnPlayer)
  document.getElementById('turnPlayer').innerText = playerInput.value //?  playerInput é o nome colocado no input
}

function initializeGame() {
  // Inicializa as variáveis globais 
  vBoard = [['', '', ''], ['', '', ''], ['', '', '']] //? array bidimicional
  turnPlayer = 'player1'
  // Ajusta o título da página (caso seja necessário)
  document.querySelector('h2').innerHTML = 'Vez de: <span id="turnPlayer"></span>' //? quando terminar o jogo mudo esse valor
  updateTitle() //? chamo ao terminar
  // Limpa o tabuleiro (caso seja necessário) e adiciona os eventos de clique
  boardRegions.forEach(function (element) { //?deixa o tabuleiro limpo
    element.classList.remove('win') 
    element.innerText = ''
    element.classList.add('cursor-pointer')
    element.addEventListener('click', handleBoardClick) //? ao clicar deixa uma bola ou x
  })
}
// Verifica se existem três regiões iguais em sequência e devolve as regiões
function getWinRegions() { //? verificar se o jogador venceu 
  const winRegions = [] //? array de retorno, se não tiver vencido volta pra campo
  if (vBoard[0][0] && vBoard[0][0] === vBoard[0][1] && vBoard[0][0] === vBoard[0][2])
    winRegions.push("0.0", "0.1", "0.2")
  if (vBoard[1][0] && vBoard[1][0] === vBoard[1][1] && vBoard[1][0] === vBoard[1][2])
    winRegions.push("1.0", "1.1", "1.2")
  if (vBoard[2][0] && vBoard[2][0] === vBoard[2][1] && vBoard[2][0] === vBoard[2][2])
    winRegions.push("2.0", "2.1", "2.2")
  if (vBoard[0][0] && vBoard[0][0] === vBoard[1][0] && vBoard[0][0] === vBoard[2][0])
    winRegions.push("0.0", "1.0", "2.0")
  if (vBoard[0][1] && vBoard[0][1] === vBoard[1][1] && vBoard[0][1] === vBoard[2][1])
    winRegions.push("0.1", "1.1", "2.1")
  if (vBoard[0][2] && vBoard[0][2] === vBoard[1][2] && vBoard[0][2] === vBoard[2][2])
    winRegions.push("0.2", "1.2", "2.2")
  if (vBoard[0][0] && vBoard[0][0] === vBoard[1][1] && vBoard[0][0] === vBoard[2][2])
    winRegions.push("0.0", "1.1", "2.2")
  if (vBoard[0][2] && vBoard[0][2] === vBoard[1][1] && vBoard[0][2] === vBoard[2][0])
    winRegions.push("0.2", "1.1", "2.0")
  return winRegions
}
// Desabilita uma região do tabuleiro para que não seja mais clicável
function disableRegion(element) {
  element.classList.remove('cursor-pointer')
  element.removeEventListener('click', handleBoardClick)
}
// Pinta as regiões onde o jogador venceu e mostra seu nome na tela
function handleWin(regions) {
  regions.forEach(function (region) {
    document.querySelector('[data-region="' + region + '"]').classList.add('win')  //? pego os elements vencedor e add a class win
  })
  const playerName = document.getElementById(turnPlayer).value
  document.querySelector('h2').innerHTML = playerName + ' venceu!'
}

function handleBoardClick(ev) {
  // Obtém os índices da região clicada
  const span = ev.currentTarget //? o span que aciona o evento ao clicar, 
  const region = span.dataset.region // N.N //? pego o valor da data region 
  const rowColumnPair = region.split('.') // ["N", "N"] //? com split pego cada valor , e tranformo em array
  const row = rowColumnPair[0]
  const column = rowColumnPair[1]
  // Marca a região clicada com o símbolo do jogador
  if (turnPlayer === 'player1') {
    span.innerText = 'X'
    vBoard[row][column] = 'X'
  } else {
    span.innerText = 'O'
    vBoard[row][column] = 'O'
  }
  // Limpa o console e exibe nosso tabuleiro virtual
  console.clear()
  console.table(vBoard)
  // Desabilita a região clicada
  disableRegion(span)
  // Verifica se alguém venceu
  const winRegions = getWinRegions() //? regiao vitoriosa, fileira de 3
  if (winRegions.length > 0) { //? se for maior que zero, significa que o array criado la em cima retonou um vencendor nas condições function getWinRegions()
    handleWin(winRegions)  //? regiao de vitoria, estilizar
  } else if (vBoard.flat().includes('')) {  //? pega o array  bidimisional e trasnformo em unidimensional, junto tudo, se tiver espaco ou região vazia então o jogo não acabou
    turnPlayer = turnPlayer === 'player1' ? 'player2' : 'player1'  //? segue o jogo e troca
    updateTitle()  //? trocar o nome
  } else {  //? se nimguem venceu e não tem espaço vazio
    document.querySelector('h2').innerHTML = 'Empate!'
  }
}
// Adiciona o evento no botão que inicia o jogo
document.getElementById('start').addEventListener('click', initializeGame)