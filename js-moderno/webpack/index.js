//* é um empacotador, em um site, por exemplo, pode ter varios js, inumeros modules, dependentes, e ele junta tudo em um só, ficando facil sua publicação

//* peças chaves do webpack
//| entry----  é ponto de entrada, aonde o wabpack procurará arquivos para empacotar
//| output é a saida , oresultado do pacotamento 
//| loaders-- serve para o wabpack transformar em modulos validos e empacota-los outros tipos de arquivos, como css, lembrando que o padrão do webpack é só empacotar javascript para e json 
//| plugins -- sao exterson com varias outras função



//* é um pacote que nem o babel, então comeca com npm init -y
//* crie uma pasta, para aonde vai o empacotamento
//* crei outra pasta src, aonde fica todo nosso arquivo para empacotar
//* para instalar npm i -D webpack webpack-cli 
//* depois só chamar npx webpack

//| na pasta dist apareceu um main.js
//* comprime ao maximo, tira comemtario, etc
//* no meu arquivo src, eu baixei o dayjs , mas depois que empacotar , eu não preciso mais, posso desitalar ou excluir a pasta
//* veja, se eu for na pasta html no dist, mesmo depoois de apagar o module dayjs o script funciona

//! então é só colocar o main empacotado junto com a nossa aplicação, pagina html , rtcc, ele vai rodar sem as depencias ou outros arquivos, pega tudo que precisa 