var data = new Date()
var day =data.getDate()
var ano = data.getFullYear()
var mes = data.getMonth()
var  validade = 2024


    console.log(ano)

    if( ano > validade){
        console.log('em dias')
    }
    else if( ano == validade){
        console.log("atençao vence hj")
    }
    else if( ano < validade){
        console.log("vencido")
    }
 