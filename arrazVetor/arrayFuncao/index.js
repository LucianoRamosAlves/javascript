let valores = [1,2,3,4];
 const op =[// crio varios função para depois eu operar pelo indice
    val=>{
        let res = 0 // comeca pelo zero
        for( v of val){
            res+= v // pecorro e adiciona a soma dos elementos val no res
        }
        return res
    },
    val=>{
        let res = 1 // comeca pelo 1, pois se pelo 0 ao multiplicar sempre dar zero
        for( v of val){
            res*= v // pecorro e adiciona a soma dos elementos val no res
        }
        return res
    },
    val=>{
        for( v of val){
            console.log(v)
        }
    }
 ] 

 console.log(op[1](valores))
 //* pego o indice de qual função vou querer e ligo com meu arraz

 console.log(op[0](valores))

 op[2](valores) //* como essa funçao já esta em log.. só passo o indice e a referencia