//?-----------html
/*
<body>
  <h1>Escalação do Time</h1>
  <h2>Escalar Jogador</h2>
  <p>
    <label for="position">Posição:</label>
    <input type="text" id="position">
    <label for="name">Nome:</label>
    <input type="text" id="name">
    <label for="number">Número:</label>
    <input type="number" id="number">
    <button onclick="addPlayer()">Escalar</button>
  </p>
  <h2>Remover Jogador</h2>
  <p>
    <label for="numberToRemove">Número:</label>
    <input type="number" id="numberToRemove">
    <button onclick="removePlayer()">Remover</button>
  </p>
  <h2>Time:</h2>
  <ul id="team-list"></ul>
</body>
*/ 

//?-------js
function addPlayer() {
    const position = document.getElementById("position").value
    const name = document.getElementById("name").value
    const number = document.getElementById("number").value
  
    const confirmation = confirm("Escalar " + name + " como " + position + "?")
  
    if (confirmation) {
      const teamList = document.getElementById("team-list")
      const playerItem = document.createElement("li")
      playerItem.id = "player-" + number
      playerItem.innerText = position + ": " + name + " (" + number + ")"
      teamList.appendChild(playerItem)
  
      document.getElementById("position").value = ""
      document.getElementById("name").value = ""
      document.getElementById("number").value = ""
    }
  }

  function removePlayer() {
    const number = document.getElementById("numberToRemove").value
    const playerToRemove = document.getElementById("player-" + number)
  
    const confirmation = confirm("Remover o jogador " + playerToRemove.innerText + "?")
  
    if (confirmation) {
      document.getElementById("team-list").removeChild(playerToRemove)
      document.getElementById("numberToRemove").value = ""
    }
  }