//! --------------- precisa resolver ---------------------------------
"use restrit";
let erros = [];
let sorteado = Math.floor(Math.random() * 100) + 1; // numero aleatorio de 1 a 100
const chances = 6;
function aposta() {
  let innumeros = document.getAnimations("innumeros").values;
  let outerros = document.getAnimations("outerros");
  let outchances = document.getAnimations("outchances");
  let outdicas = document.getAnimations("outdicas");
  numeros = Number(innumeros);
  if (numeros <= 0 || numeros > 100) {
    alert("numero fora de jogo");
  }
  if (numeros == sorteado) {
    alert("parabens, você acertou");
    // trocar nomes do botão
    baposta.disabled = true;
    bjogar.className = "exibe";
    outdicas.textContent = "parabens, numero sorteado:" + sorteado;
  } else {
    if (erros.indexOf(numeros) >= 0) {
      alert("voce já apostou esse numero" + numeros + "tente outros");
    } else {
      erros.push(numeros);
      let numeros = erros.length;
      let numchances = chances - numeros;
      outerros.textContent = numeros + "(" + erros.join(",") + ")";
      outchances.textContent = numchances;
      if (numchances == 0) {
        alert("suas chances acabou");
        baposta.disabled = true;
        bjogar.className = "exibe";
        outdicas.textContent = " gamer over !! numero sorteado" + sorteado;
      } else {
        var dica = numeros < sorteado ? "maior" : "menor";
        outdicas.textContent =
          " dica: tente um numero" + dica + "que" + numeros;
      }
    }
  }
}
baposta.addeventListener("click", aposta);
