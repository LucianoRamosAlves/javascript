function conversor(){
    let infilme = document.querySelector("#infilme").value;
    let min = document.querySelector("#inmin").value;
    inmin = Number(min);
    let horas = inmin / 60 ;
    let m = (inmin % 60) ;
     return ` o filme <br> <strong>${infilme}</strong> <br> tem a duração de: <br>
    <${Math.floor(horas)} horas e ${m} minutos`
}

bconveter.addEventListener('click',()=>{
    let outresultado = document.querySelector("#outresultado");
    outresultado.innerHTML = conversor()

});


