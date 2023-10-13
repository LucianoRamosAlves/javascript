// pego minhs referencias

let p_array = document.getElementById("array");
let inpesquisar = document.getElementById("inpesquisa");
let res = document.getElementById("outres");
let bpesquisar = document.getElementById("bpesquisar");

let elementos_array=["casa","lua","fita","mel","rei"];

// passo os elementos para meu elemento de saida

p_array.textContent = "[" + elementos_array + "]";
lista = ""

bpesquisar.addEventListener("click", (evt)=>{
    // pego o array uso find e pego seus elementos el
   elementos_array.find((el , i)=>{
    // caso nao teer
            res.textContent="valor não encontrado"
            // se o elementos for igual ao campo da pesquisa
        if(el.toUpperCase() == inpesquisar.value.toUpperCase()){
            res.innerHTML = " vslor encontrado"  + el + "na posição" + i
            return el
        }
    })
    
})
