" use strict"

function ligar(){
    var ligar = document.querySelector('div.ligar')
    var deligar = document.querySelector('div.desligar')
    deligar.style.background=''
    ligar.style.background='green'
    var painel = document.querySelector('section.painel')
    painel.innerHTML='ligado'
    painel.style.animation='text 2s infinite'
    painel.style.boxShadow=' inset  2px 2px  10px greenyellow'
    var painel = document.querySelector('span#lampada')
    lampada.style.color='blue'
    lampada.style.animation='lamp 2s infinite alternate'
    var luz = document.querySelector('div.luz')
    luz.style.opacity='1'
    luz.style.animation='f 2s infinite alternate'
    luz.style.filter='blur(20px)'
    luz.style.backgroundColor='blue'

}
function desligar(){
    var ligar = document.querySelector('div.ligar')
    ligar.style.background=''
    var deligar = document.querySelector('div.desligar')
    deligar.style.background='red'
    var painel = document.querySelector('section.painel')
    painel.innerHTML=''
    painel.style.boxShadow=''
    var painel = document.querySelector('span#lampada')
    lampada.style.color=''
    lampada.style.animation=''
    var luz = document.querySelector('div.luz')
    luz.style.filter='blur(20px)'
    luz.style.animation=''
    luz.style.filter='blur(0px)'
    luz.style.opacity='0'
    luz.style.backgroundColor=''

}