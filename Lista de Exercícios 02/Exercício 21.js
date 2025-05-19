function funcaoDaSorte(numero){
    min = Math.ceil(1);
    max = Math.floor(10);
    numeroSorteado = Math.floor(Math.random() * (max - min) + min)
    if(numeroSorteado == numero){
        return `Parabéns! O número sorteado foi o ${numero}` 
    }
    else return `Que pena! O número sorteado foi o ${numeroSorteado}` 
}
function funcaoDaSorte1(numero){
    min = Math.ceil(1);
    max = Math.floor(10);
    numeroSorteado = Math.floor(Math.random() * (max - min) + min)
    return numeroSorteado == numero ?
        `Parabéns! O número sorteado foi o ${numero}`:
        `Que pena! O número sorteado foi o ${numeroSorteado}` 
}
console.log(funcaoDaSorte(10))
console.log(funcaoDaSorte1(1))