const caixa1 = document.querySelector("#caixa1");
const caixa2 = document.querySelector("#caixa2");
const btn = document.querySelector("#btn");
const todoscursos = [...document.querySelectorAll(".curso")]

todoscursos.map((el)=> {
    el.addEventListener("click",(evt)=>{
        const curso = evt.target
        curso.classList.toggle("selecionado")
    })
})
btn.addEventListener("click",()=>{
    const cursosselecionados =[...document.querySelectorAll(".selecionado")]
    const cursosnaoselecionados =[...document.querySelectorAll(".curso:not(.selecionado)")]
    cursosselecionados.map((el)=>{
        caixa2.appendChild(el)
    })
    cursosnaoselecionados.map((el)=>{
        caixa1.appendChild(el)
    })
    
})