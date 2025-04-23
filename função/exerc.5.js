function manipulandoNumeros(valoremDecimais){

    valoremReal = 'R$' + " " + valoremDecimais.toFixed(2).replace('.', ',');
    return valoremReal
}

console.log(manipulandoNumeros(0.30000000000000004));
console.log(manipulandoNumeros(0.1 + 0.2));
