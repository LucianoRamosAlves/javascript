 let pacientes = []; //* crio vetor global
function adicionar(){
    let inNomePaciente = document.getElementById("inNomePaciente").value;
    let outlista =document.getElementById("outlista");
    if((inNomePaciente == "") || (inNomePaciente >= 0)){
        alert("digite um nome valido");
        inNomePaciente.focus();
    }
    pacientes.push(inNomePaciente); //* adiciono o nome no final do vetor

    let lista = ""; //* espaço para concatenar pacientes

    for(var i=0; i < pacientes.length; i++){ //* pecorro toda o vetor
        lista += ( i + 1 ) + "." + pacientes[i] + "\n";
        //! como visto antes, criei let lista , um espaco em branco para concatenar e segue a mesma regra , lista tem que receber lista 
        /* //* lista += pacientes ou lista = lista + pacientes, litsa recebe ela mais pacientes

        //? i + 1 , soma 1 no i , ao inveis de comecer pelo indice 0, comeca por 1 
        */
    }
    
    outlista.textContent = lista 
    inNomePaciente.value = ""
    inNomePaciente.focus();
}
badicionar.addEventListener("click", adicionar);

//* ------------ segunda funçao --- urgencia------



function urgencia() {
    let inNomePaciente = document.getElementById("inNomePaciente").value;
    let outlista = document.getElementById("outlista");
    if((inNomePaciente == "") || (inNomePaciente >= 0)){
        alert("digite um nome valido");
        inNomePaciente.focus();
        return;
    }
    pacientes.unshift(inNomePaciente);//* adiciona o nome no inicio do vetor
    let lista = ""; //* espaço para concatenar pacientes

    for(var i= 0; i<pacientes.length; i++){ //* pecorro toda o vetor
        lista += ( i + 1 ) + "." + pacientes[i] + "\n";
        //! como visto antes, criei let lista , um espaco em branco para concatenar e segue a mesma regra , lista tem que receber lista 
        /* //* lista += pacientes ou lista = lista + pacientes, litsa recebe ela mais pacientes

        //? i + 1 , soma 1 no i , ao inveis de comecer pelo indice 0, comeca por 1 
        */
    }
    outlista.textContent = lista 
    inNomePaciente.value = ""
    inNomePaciente.focus();
}
burgencia.addEventListener("click", urgencia);

//*------------ tercerira funcao---------atender------

function atender(){
    if(pacientes.length == 0){
        alert("No pacientes");
    }
    let outatendimento = document.getElementById("outemAtendimento");
    let outlista = document.getElementById("outlista");

    let atender = pacientes.shift(); //* removo o primeiro da lista e jogo na let 
    outatendimento.textContent= atender; //* pego o intem removido acima e exibo

    let lista = ""

    for(let i=0; i<pacientes.length; i++){
       lista += (i + 1) + " " + pacientes[i] + "\n";
    }
    outlista.textContent= lista;
    inNomePaciente.value = ""
    inNomePaciente.focus();
}
batender.addEventListener("click", atender);