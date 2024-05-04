function carregar(){
    let titulo = document.querySelector('h1.titulo')
    let frase = document.querySelector('div.frase')
    let img = document.querySelector('img.imagem')
    let horas = document.querySelector('div.horas')
    let data = new Date()
    let hora =data.getHours()
    let minuto = data.getMinutes()
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
carregar()