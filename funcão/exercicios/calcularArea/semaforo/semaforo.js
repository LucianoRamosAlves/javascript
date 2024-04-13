function cverde(){
    const cor = document.querySelector("div.verde")
    cor.style.background="rgb(170, 255, 0)"
    const cor2 = document.querySelector("div.amarelo")
    cor2.style.background=""
    let cor3 = document.querySelector("div.vermelho")
    cor3.style.background=""
    let text = document.querySelector("div.painel")
    text.innerHTML="siga"
    text.style.color="rgb(170, 255, 0)"
   
}
function verde(){
    cverde()
}
function camarelo(){
    const cor2 = document.querySelector("div.amarelo")
    cor2.style.background="yellow"
    let cor = document.querySelector("div.verde")
    cor.style.background=""
    let cor3 = document.querySelector("div.vermelho")
    cor3.style.background=""
    let text = document.querySelector("div.painel")
    text.innerHTML="atenção"
    text.style.color="yellow"
}
function amarelo(){
    camarelo()
}
function cvermelho(){
    let cor3 = document.querySelector("div.vermelho")
    cor3.style.background="rgb(255, 18, 18)"
    const cor2 = document.querySelector("div.amarelo")
    cor2.style.background=""
    const cor = document.querySelector("div.verde")
    cor.style.background=""
    let text = document.querySelector("div.painel")
    text.innerHTML="pare"
    text.style.color="rgb(255, 18, 18)"
}
function vermelho(){
    cvermelho()
}
function t(){
    let text = document.querySelector("#tex")
    tex0 = text.value
    if(tex0 ="pedreste" || "animal"|| "tempestade"){
        cvermelho()
    }
 if (tex0 ="acidente" || "buracos"|| "chuvas"){
        camarelo()
    }
 

}
function te(){
    t()

}