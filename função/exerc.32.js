function mediaAritmeticaVetor(vetor){
    x = 0;
    for(i = 0; i < vetor.length; i++){
        x += vetor[i];
    }
    return x/vetor.length;
}

console.log(mediaAritmeticaVetor([1,2,3,4]));
console.log(mediaAritmeticaVetor([1,2,3,6,7]));