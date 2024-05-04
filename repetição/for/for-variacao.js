//@ variação do for

let num = [10,20,30,40,50,60,]

for (var i = 0; i < num.length; i++) { //* pecorro e mostro a posição do element
    console.log(i)
}

for (var i = 0; i < num.length; i++) { //* pecorro e mostro o elemento 
    console.log(num[i])
}

//! for in

for (n in num){ //* criei uma variavel n , que vai receber elentos percorridos do num
    console.log(n); //* é o mesmo do console.log(i), mostra a posição
    console.log(num[n]) //* mostro os elementos
}

//! for of , ele vai dentro dos elementos e mosttra 

for (n of num){ //* criei uma variavel n , que vai receber elentos percorridos do num
    console.log(n); //* veja que mostrei os element
}

//| exemplo 

const objs = document.getElementsByTagName("div")

for ( n of objs){ //* pego os elementos div, e troco o nome
    n.innerHTML = "ola"
}
for ( n in objs){ //* pego os elementos div, e troco o nome, mas veja que tem que mudar
    objs[n].innerHTML = "ola"
}

//? resumindo, para pegar os elementos em si, for of... para pegar a posicion for in