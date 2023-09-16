function carregar(){
    var titulo = document.querySelector('h1.titulo')
    var frase = document.querySelector('div.frase')
    var img = document.querySelector('img.imagem')
    var horas = document.querySelector('div.horas')
    var data = new Date()
    var hora =data.getHours()
    var minuto = data.getMinutes()
    horas.innerHTML=`${hora}:${minuto}`
    if(hora >=6 && hora<12){
        titulo.innerHTML='olá, Bom Dia'
        frase.innerHTML='hora do café'
        img.src="manha.jpg"
        horas.style.background='#D98F4E'
        document.body.style.background='#BF935E'

    }
    else if(hora>=12 && hora<18){
        titulo.innerHTML='olá, Boa Tarde'
        img.src='tarde.jpg'
        frase.innerHTML='hora do almoço'
        horas.style.background='#809BBF'
        document.body.style.background='#F2B705'
    }
    else{
        titulo.innerHTML='olá, Boa Noite'
        frase.innerHTML='como esta sua noite ?'
        img.src="noite.jpg"
        horas.style.background='#025159'
        document.body.style.background='#013A40'
    }

}