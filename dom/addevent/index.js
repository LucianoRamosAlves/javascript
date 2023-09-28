// primeiro pegar os elementos que vc vai trabalhar
//* as caixas , input
const caixa1 = document.querySelector("#caixa1")
const caixa2 = document.querySelector("#caixa2")
const botao =  document.querySelector("input#botao")

//* agora vou trabalahr com todos os elementos
//* então tenho que pegar todos

//? criei uma classe só para os selecionados

const todasCores = [...document.querySelectorAll('#caixa1 > div')]
//* transformei em array

//? agora quero pecorrer todos esses elementos dentro dessa array

todasCores.map((el)=>{
    el.addEventListener("click", (evt) => {
        const cor = evt.target
       cor.classList.toggle("selecionado")
    })
})




botao.addEventListener("click",() => {
    const corSelecionado = [...document.querySelectorAll(".selecionado")]
    const corNaoSelecionado = [...document.querySelectorAll(".cor:not(.selecionado)")]
    corSelecionado.map((el)=>{ 
        caixa2.appendChild(el)
    })
   
    corNaoSelecionado.map((el)=>{ 
            caixa1.appendChild(el)
            console.log(corNaoSelecionado);
    })
})

