function retangulo(nr1, nr2) {
    var r1 = document.querySelector('input#nr1')
    nr1 = r1.value
    var r2 = document.querySelector('input#nr2')
    nr2 = r2.value
    return nr1*nr2
}
function r(){
    var rretangulo=document.querySelector('div.rretangulo')
    rretangulo.innerHTML= retangulo()
    if(retangulo()<0){
        rretangulo.innerHTML= 'numero invalido' 
    }
}