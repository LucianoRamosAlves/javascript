//| --------------funcçao que chama outra função---------------
function dividir(num){
    console.log(num)
    if(num % 2 == 0){
        dividir(num/2)
    } else{ 
        return num
    }
}
dividir()

//? criei a funçaõ dividir que vai receber um numero (num) , se esse numero tiver um resto zero entao ele é parte se torna verdade e entra no if , que cai na funcão na mesma dividir por 2 , sai e de novo vai para a função dividir() que é chamada novamente, se caso 
//* num = 40 é par cai na função dividir por 2 , fica 20 ,etc.

//! cuidado para não criar uma chamada infinita , tem que ter uma hora de parada

//* fatorial 