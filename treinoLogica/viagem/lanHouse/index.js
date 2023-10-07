function calcular (){
    let invalor = document.getElementById("invalor").value;
    let intempo = document.getElementById("intempo").value;
    tempo = parseFloat(intempo);
    valor = parseFloat(invalor);
    let pagar = (tempo * valor ) / 15 ;
    return ` valor a pagar R$:${pagar}`
}
bc.addEventListener("click", ()=>{
    let outr = document.getElementById("outr");
    outr.innerHTML = calcular();
})

console.log(`oi`);