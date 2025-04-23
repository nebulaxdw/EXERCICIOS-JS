vetorInteiro = [1,2,3,4];
vetorString = ["1", "2", "3", "4"];
vetorDouble = [1.1, 2.1, 3.1, 4.1]
function concatenar(...args){
    resultado = [];
    for(i = 0; i < arguments.length; i++){
        resultado = resultado.concat(arguments[i])
    }
    return resultado;
}

console.log(concatenar(vetorInteiro, vetorDouble, vetorString));
console.log(concatenar(vetorInteiro, vetorString));
