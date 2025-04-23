function vetorMultiplicacao(vetor, n){
    vetorMultiplicação = []
    for(i in vetor){
        vetorMultiplicação.push(n*vetor[i]);
    }
    return vetorMultiplicação;
}

function vetorMultiplicacaoAcimaDe5(vetor, n){
    vetorMultiplicação = [];
    if(n > 5){
        for(i in vetor){
            vetorMultiplicação.push(n*vetor[i]);
        }
    }
    return vetorMultiplicação;
}

console.log(vetorMultiplicacao([1,2,3,4,5,6], 2));
console.log(vetorMultiplicacaoAcimaDe5([1,2,3,4,5,6], 6));