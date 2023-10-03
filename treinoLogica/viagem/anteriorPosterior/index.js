function calculo(){
    var n = document.querySelector("#n1").value;
n1 = parseFloat(n);
var posterior = n1+1;
var antecessor = n1-1 ;
return `o antecessor é  ${antecessor} 
o suacessor é :   ${posterior}`

}
function resultado(){
    alert(calculo())
}

