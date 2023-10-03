function promocao(){
    let innome = document.querySelector("#innome").value;
    let preco = document.querySelector("#inpreco").value;
    let inparcelas = document.querySelector("#inparcelas").value;
    inpreco = parseFloat(preco);
    let metadePreco = inpreco / 2 ;
    let restantePreco = metadePreco / inparcelas ;
    return ` Promoção:<strong>${innome}</strong> <br> Entrada de: <strong> R$:${metadePreco.toFixed(2)}</strong>
    <br> + <strong>${inparcelas}</strong>x de <strong> R$:${restantePreco.toFixed(2)}</strong`
}
bver.addEventListener('click',()=>{
    let outresultado = document.querySelector("#outresultado");
    outresultado.innerHTML = promocao();
});
/* function promocao(){
    let innome = document.querySelector("#innome").value;
    let preco = document.querySelector("#inpreco").value;
    let parcelas = document.querySelector("#inparcelas").value;
    inparcelas = parseFloat(parcelas)
    inpreco = parseFloat(preco);
    let metadePreco = (inpreco / 2);
    let restantePreco = metadePreco / inparcelas ;
    return ` Promoção:<strong>${innome}</strong> <br> Entrada de: <strong>${metadePreco}</strong>
    <br> + <strong>${inparcelas}</strong>x de <strong> R$:${restantePreco}</strong`;
}
bver.addEventListener('click',()=>{
    let outresultado = document.querySelector("#outresultado");
    outresultado.innerHTML = promocao();
});*/