function ligar(){
    var ligar = document.querySelector('div.ligar')
    var deligar = document.querySelector('div.desligar')
    deligar.style.background=''
    ligar.style.background='green'
    var painel = document.querySelector('section.painel')
    painel.innerHTML='ligado'
    var painel = document.querySelector('span#lampada')
    lampada.style.color='blue'
    var luz = document.querySelector('div.luz')
    luz.style.opacity='100%'

}
function desligar(){
    var ligar = document.querySelector('div.ligar')
    ligar.style.background=''
    var deligar = document.querySelector('div.desligar')
    deligar.style.background='red'
    var painel = document.querySelector('section.painel')
    painel.innerHTML=''
    var painel = document.querySelector('span#lampada')
    lampada.style.color=''
    var luz = document.querySelector('div.luz')
    luz.style.opacity='0%'
    luz.keyframes='s'

}