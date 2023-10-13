
bb.addEventListener("click",(evt)=>{
let todosradios =[...document.querySelectorAll("input[type=radio]")];
let radioselecionado = todosradios.filter((el , ind , arr)=>{
    return el.checked
});
radioselecionado = radioselecionado[0];// com isso,pego só o radio selecionado

let compri = radioselecionado.parentNode.firstChild.textContent;
alert(compri)
}
)
/* para remover faz essa mesma coisa pega o item selecionado e coloca um remove, cuidado pois tem que remver ele todo
*/

''