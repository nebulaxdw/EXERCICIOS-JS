'Solução 1'
function somarNumeros(elementos){
    let aux = 0
    for(let i of elementos){
        aux += i
    }
    return aux;
}
'Solução 2'
function somarNumeros2(elementos){
    let soma = 0
    elementos.forEach(elemento => soma += elemento);
    return soma;
}
'Solução 3'
function somarNumeros3(elementos){
    const soma = elementos.reduce((acumulador, elementoAtual) => acumulador + elementoAtual, 0);
    return soma;
}
console.log(somarNumeros([10,20,30]))
console.log(somarNumeros2([10,20,30]))
console.log(somarNumeros3([10,20,30]))