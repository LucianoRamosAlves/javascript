//!---------------- rever--------------------------------------------
//!----------------------------------------------
//!------------------------------------------------------------

//* configuração do webpack
/*const path = require('path') //* modele oara trabalhar com caminhos,

module.exports = {
  entry: { //* entrada, lugares que ele vai procurar
    index: './src/indexx.js', //* ciro meu nome de arquivo que vai receber o em pacote
    hello: './src/hello.js' //* caso eu tenha mais de um arquivo de entrada,que quero no projeto final
  },
  output: { //* é o arquivo final
    path: path.resolve(__dirname, 'public'), //* não digito o caminho completo, uso um modelo do node, com esse modeule, pego o caminho atual completo --dirname, não preciso fazer isso manual e passo algo que vai ser adicionado no final, nesse caso a pasta public
    filename: '[name].min.js' //| tem que assim, caso tinha mais de 1 arquivo de entrada
  },
  mode: 'development'
}
*/

//? para pacotar css

const path = require('path')

module.exports = {
  entry: {
    index: './src/index.js'
  },
  mode: 'development',
  module: { 
    rules: [{ 
      test: /\.css$/, //* qual arquivos vai aplicar o loader, testa todos os arquivos que termina em .css
      use: ['style-loader', 'css-loader']
    }]
  }
}