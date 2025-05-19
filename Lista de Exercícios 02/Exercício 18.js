function calcularMedia(numeros){
    mediaSimples = 0
    for(numero of numeros){
        mediaSimples += numero/numeros.length;
    }
    return mediaSimples;
}
function calcularMedia2(numeros){
    mediaSimples = 0
    for(let i = 0; i < numeros.length; i++){
        mediaSimples += numeros[i]/numeros.length;
    }
    return mediaSimples;
}

function calcularMedia3(numeros){
    mediaSimples = 0;
    numeros.forEach(numero => mediaSimples += numero/numeros.length);
    return mediaSimples
}
function calcularMedia4(numeros){
    const quantidadeDeNumeros = numeros.length;
    const somaTotal = numeros.reduce((numeroA, numeroB) => numeroA+numeroB);
    return somaTotal / quantidadeDeNumeros;
}
console.log(calcularMedia([1,2,3,4]));
console.log(calcularMedia2([1,2,3,4,5]));
console.log(calcularMedia3([1,2,3,4,5]));
console.log(calcularMedia4([1,2,3,4,5]));