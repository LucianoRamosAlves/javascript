//!---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- ----------------------------------------------------------------

let num_teclas = [...document.querySelectorAll(".num")]; //* pego todas as teclas num
console.log(num_teclas); // veja em console
let operadores_teclas = [...document.querySelectorAll(".operador")]; //* pego todas os operadores
console.log(operadores_teclas); // veja em console
let tecla_res = document.querySelector(".res");
let digitos_display = document.querySelector("#digitos_display");
let tecla_on = document.querySelector(".on");
let tecla_limpar = document.querySelector(".limpar");
const igual = document.querySelector(".tel");
let luz = document.querySelector("#luz");
let t = [...document.querySelectorAll(".t")]

let decimal = false;
let sinal = false; // para não adcionar 2 sinais seguidos

num_teclas.forEach((el) => {
  el.addEventListener("click", (evt) => {
    sinal = false;
    if (evt.target.innerHTML == ",") {
      // retorno o sinal false para sair da condição abaixo
      if (!decimal) {
        decimal = true;
        if (digitos_display.innerHTML == "0") {
          digitos_display.innerHTML = "0,";
        } else {
          // se não ele concatena normal
          digitos_display.innerHTML += evt.target.innerHTML;
        }
      }}
      else{
        if(digitos_display.innerHTML == "0"){
            digitos_display.innerHTML=""
        }
        digitos_display.innerHTML += evt.target.innerHTML; //* veja o que é target
      }
    
  });
});

operadores_teclas.forEach((el) => {
  el.addEventListener("click", (evt) => {
    if (!sinal) {
      // se o sinal for diferente do estabelecido acima ou seja true
      sinal = true;
      if (digitos_display.innerHTML == "0") {
        // se tiver só 0
        digitos_display.innerHTML = ""; // apago esse zero
      }
      if (evt.target.innerHTML == "x") {
        digitos_display.innerHTML += "*";
      } else {
        digitos_display.innerHTML += evt.target.innerHTML;
      }
    }
  });
});

tecla_limpar.addEventListener("click", (evt) => {
  digitos_display.innerHTML = "0";
  sinal = false;
  decimal = false
});

igual.addEventListener("click",(evt)=>{
  digitos_display.forEach((el)=>{
    ress = eval(el.innerHTML)
    digitos_display.innerHTML=el
  })
  });
  ligado = true;

  
  tecla_on.addEventListener("click", (evt) => {
    if (ligado == true) {
      luz.style.backgroundColor = "green";
      ligado = false;
    } else if (ligado == false) {
      luz.style.backgroundColor = "red";
      ligado = true;
      digitos_display.innerHTML = "";
      el.style.display = "none";
    }
  });

