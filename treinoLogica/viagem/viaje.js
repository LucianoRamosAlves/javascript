function calcular(){
let n1 = document.querySelector("#dias").value
let n2 = document.querySelector("#horas").value
ndias = parseFloat(n1)
nhoras =parseFloat(n2)
return  ndias*24 + nhoras

}
function verificar(){
    alert(` Sua Duração da viagem em horas: ${calcular()} horas`);
}