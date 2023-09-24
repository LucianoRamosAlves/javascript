function retangulo(r1, r2) {
    let re1 = document.querySelector('input#nr1')
    r1 = re1.value
    let re2 = document.querySelector('input#nr2')
    r2 = re2.value
    return r1*r2
}
function multiplicar(){
     var rt =document.querySelector('div.rretangulo')
    rt.innerHTML= `  <strong> AREA É  <br></strong> ${retangulo()}  M <sub>2</sub>`
    if(retangulo() < 0){
        rt.innerHTML= 'ops! numero invalido<br> por favor, verificar valores' 
    }
}
function quadrado(q3){
    let qu1 = document.querySelector('input#nr3');
    q3 = qu1.value
    return q3*q3
}
function rquadrado(){
    let rq = document.querySelector('div.rquadrado')
    rq.innerHTML= `  <strong> AREA É  <br></strong> ${quadrado()}  M <sub>2</sub>`
}
function triangulo(t4,t5){
    var tr1 = document.querySelector('input#nr4')
    t4 = tr1.value
    var tr2 = document.querySelector('input#nr5')
    t5 = tr2.value
    return (t4*t5 )/ 2
}
function rtriangulo(){
    var rt =document.querySelector('div.rtriangulo')
    rt.innerHTML= `  <strong> AREA É  <br></strong> ${triangulo()}  M <sub>2</sub>`
    if(triangulo() < 0){
        rt.innerHTML= 'ops! numero invalido<br> por favor, verificar valores' 
    }
     
}
function circulo(c1){
    var ci1 = document.querySelector('input#nr6');
    c1 = ci1.value;
    var pi = 3.14; 
    return pi * c1**2
}

function rcirculo(){
    var rc = document.querySelector('div.rcirculo')
    rc.innerHTML= `  <strong> AREA É  <br></strong> ${circulo()}  M <sub>2</sub>`
}