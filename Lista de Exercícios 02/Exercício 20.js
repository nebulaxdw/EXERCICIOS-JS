function menorNumero(numeros){
    menor = numeros[0]
    numeros.forEach(numero =>{
        if(numero < menor){
            menor = numero
        }
    })
    return menor;
}

function menorNumero2(numeros){
    menor = numeros[0];
    for(i of numeros){
        if(i < menor){
            menor = i;
        }
    }
    return menor;
}

function menorNumero3(numeros){
    return Math.min(...numeros);
}

function menorNumero4(numeros){
    return numeros.reduce((anterior, atual) => anterior < atual ? anterior : atual);
}
console.log(menorNumero([3,2,-1,4]));
console.log(menorNumero2([3,2,,4]));
console.log(menorNumero3([3,2,2,4]));
console.log(menorNumero4([3,2,2,4]));