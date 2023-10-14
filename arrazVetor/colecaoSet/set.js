//! mesmo molde do map...não aceita valores iguais.. não permite entradas duplicadas

let rap = new Set(["racionais", "mv bill", "sabotagem"])

rap.add("emicida")
rap.add("mv bill")
rap.add("mv bill")



console.log(rap);
console.log(rap.size);//* era pra ter 6, mas como 2 sao repitidos, só conta 4

//* pode pecorrer que nem coleção map ou for 

for ( let r of rap){
    console.log(r);
}