
//* estrutura basic da função

//! função nomeDaFunção (parametro da função){
    //* procedimentos
    //? saida
//!}

//* parametros e saida são opcionais, mas o procrdimnto é obrigatorio

//* parametros é como se fosse uma variavel dentro da função aonde eu posso colocar umm valor depois ex:
function dobro(x){
    alert("dobro " + "de" + "x" + é + x)
}

dobro(5) 
//* ficou x=5, passe 5 para o parametro x
//?-----------------------------------------------------
//** */ function texto (t){
//     console.log(` seja bem vindo ${t} `);
// }
// texto("luis")
// texto("vudua")
// texto("auri") 


function texto(t){
    return t + "oi "
}
console.log(texto("luis "));

//| posso colocar um parametro padrão para evitar erros ao quando não for passado nada ao parametro ex: 
//| function ola(nome = "mundo"){
    //? alert( "ola" + nome );
//|}

//| ola() mesmo eu noa passando nada qie era pra dar erro, mas cvomo tem o padrao aparece o mundo

//* a ordem importa 
/* //*ex: function criarusuario(nome,email,senha,tipo=admin){ sempre deixe os parametros com padrao para o final
    let usuario ={ //* criei um obheto pois tem varios variaveis
        nome, é uma abreviação assim == nome = nome, quando a variavel recevbe seu mesmo nome
        email,
        senha,
        tipo,
    }} 
    
    novousuario ( luca, mat@,123,)
    */ 

    //! quando tem muitos parametroa posso simplificar ex:
    //? functiom muitosparametro(nome, tel,celular,endereco,tipo,bairro,idade,raca,estado,aniversario,pedido) veja que fica muito paramentro e fica dificil de trabalhar , então posso criar um parametro só
    
    //? function objetoComParametro(usuario){
        //? usuario.nome
        //? usuario.tel
        //? usuario.celular
        //? usuario.//... veja criei a função com parametros mais organizados ... agora é chamar
    //?}
    //? let dadosDoUsuario={ nome: "passo o nome" , telefone: "tel" etc...} ai depois de colocar os dados chamo objetoComParametro(dadosDoUsuario) ele meio que junta tudo