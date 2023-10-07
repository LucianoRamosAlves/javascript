function  promocao(){
    let innome = document.getElementById("innome").value;
    let preco = document.getElementById("inpreco").value;
    inpreco = parseFloat(Math.floor(preco)) * 2;
    return ` promoção de ${innome} <br> 
    leve 2 por apenas R$: ${inpreco}`;
}
bp.addEventListener("click", ()=>{
    let outr = document.getElementById("outr");
    outr.innerHTML = promocao();
})