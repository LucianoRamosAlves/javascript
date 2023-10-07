function calcular(){
    let preco = document.querySelector("#inpreco").value;
    let consumo = document.querySelector("#inconsumo").value;
    inpreco = parseFloat(preco);
    inconsumo = parseFloat(consumo);
    let pagar = (inconsumo * inpreco) / 1000;
    return ` Valor a pagar R$: ${pagar.toFixed(2)}`;
}
bcalcular.addEventListener("click",()=>{
    let outresultado = document.getElementById("outresultado");
    outresultado.innerHTML = calcular();
})