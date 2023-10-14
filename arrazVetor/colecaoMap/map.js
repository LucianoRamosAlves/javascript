/* //! é que nem array. coleçao map..adiciono elementos

*/

//* clear() --- limpar a coleção
//* delete() remover um elemento
//* entries() entrada da coleçao
//* forEach()  loop para pecorrer a coleção
//* get() obetr um elemento
//* has() verifica se exixte algum elemento na coleção
//* keys() obtem todas as chaves da coleção
//* set() adicionar um elemento na coleção
//* size() é o tamanho da coleção 
//*values() pego o valores 

//? crio a coleçao 
let mapa = new Map();

mapa.set("circulo", 10);
mapa.set("quadrado", 20);
mapa.set(30, "triangulo");
mapa.set("figuras", "trapézio");
mapa.set(1, 2);
console.log(mapa);
console.log(mapa.size);

console.log(mapa.get("circulo")); //* o btenho o valor da chave circulo

//* no map coleçao eu tenho uma chave e valor , em array tem o indice e valor ex: uma chave circulo e valor 10, em arry seria indice 2 valor 10, então quando eu quiser referência o 10 posso pegar a chave circulo
let pes = 30 // atribuei o valor 30 pra ele
if (mapa.has(pes)) {
    console.log("arquivo  encontrado " + "valor " + mapa.get(pes))
} else{
    console.log(" opss! arquivo não encontrado")
}
//*-------------------------------------------------- */
if (mapa.has("circulo")) {
    console.log("arquivo  encontrado ")
} else{
    console.log(" opss! arquivo não encontrado")
}
//*----------------------------------------------------------
let res = ""
if (mapa.has(pes)) {
    res = "arquivo  encontrado " + "valor " + mapa.get(pes)
} else{
    res = " opss! arquivo não encontrado"
}
outresultado.innerHTML = res
//*------------------------------------------
let ress = ""
if (mapa.has(pes)) {
    res = "arquivo  encontrado " + "valor " + mapa.get(pes)
} else{
    ress = " opss! arquivo não encontrado"
}
ress+= "esta na posição" + mapa.size
outresultado.innerHTML = ress

//*-------------------------
mapa.delete(figuras) // falo a chave e deleta o valor

//*------------------------

mapa.forEach((el)=>{
    console.log(el)
})

