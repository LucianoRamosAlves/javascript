//? com isso aqui, crio meu arquivo sem me preocupar com a compatibilidade dos navegadores antigos, faço meu codigo e depoois converto 



//@ babel é compilador ou seja tranforma, converte um cidigo de uma linguagem em outra
//@ babel é compilador de codigo javascript  para javascript, transforma codigo em javascript em mais javascript
//@ isso é porque alguns navegadores não suporta scripts modernos,
//@ ferramente que converte automaticamente em codigos com recursos modernos e transforma em codigo que funcina em navegadores desatualizados
//* tem muito mais recursos
//@ tem novos recursos que não funciona nem com isso em navegador antigo
//? pesquisse mais
//@ tem que intslar ele , o babel é um auxilar , usamos só em quanto o site ta em desenvolvimento então usar
//| npm install --save-dev ou -D , mesma coisa que save-dev,
//| tem 3 nomes de babel @babel/core é o nucleo e o @babel/cli é  a ferramenta de comando, com ele vamos interagir com o babel nucleo e o @babel/preset-env é o pacote que vai configurar automaticamente o babel 
//! para usar é npx babel nome do arquivo ex; index.js 
//@ mais por enquanto ele só fez pequenos ajuste, como colocar ponto e virgula etc..
//* mas , ele mostra os resultado no terminal, e fica feio , para criar um arquivo externo com a versão antiga tem que npx babel nome do arquivo --out-file nome do novo arquivo tem que ter o .js no final
//@ para usar o preset 
//! em resumo faz isso que ele cria um arquivo externo com a versão que suporta em nagegadores antigos, 
//! npx babel... nome do arquivo que deseja conveter ex; index.js ... --out-file ... nome do novo arquivo com .js no final... --presets=@babel/preset-env

//* para converter um pasta com varios scripts, com varios modules por exemplo, não preciso fazer isso em cada uma , pego todos os meus scripts e coloco em uma pasta src . por exemplo

//! npx babel src --out-dir dist --presets=@babel/preset-env .. para não digitar tudo isso, vou usar script de atralho, npm run babel .. obs: rever isso
