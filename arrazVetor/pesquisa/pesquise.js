// pego minhs referencias

let p_array = document.getElementById("array");
let inpesquisar = document.getElementById("inpesquisa");
let res = document.getElementById("outres");
let bpesquisar = document.getElementById("bpesquisar");

let elementos_array=["casa","lua","fita","mel","rei"];

// passo os elementos para meu elemento de saida

p_array.textContent = "[" + elementos_array + "]";

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

/*//!----- tem a variação disso 
//* every...verifica de o array ssegue uma regra que eu especificar ex: se todos os numeros nao maior qure 18
//* ao ives do eexemplo acima..trocar o campo pesquisar por verificar

let elementos_array=[34,21,10];
p_array.textContent = "[" + elementos_array + "]";
bpesquisar.addEventListener("click", (evt)=>{
   let ret =elementos_array.every((el , i)=>{
        if(el < 18){
            //* se tiver um numero menor de 18..nesse caso tem...o 10
            res.textContent="array conforme na posição" + el 
        }
        return el>=18
    })
    if(ret){
        res.innerHTML = ok
        //* se todos os elementos for maior ...ok..se ficar [34,21,19]
    }
    
})*/

