function vetorParImpar(vetor){
    vetorPar = [];
    vetorImpar = [];
    qtdPar = 0;
    qtdImpar = 0;
    for(i = 0; i < vetor.length; i++){
        if(vetor[i] % 2 == 0){
            vetorPar.push(vetor[i])
        }else{
            vetorImpar.push(vetor[i])
        }    
    }
    console.log(vetorPar.length, vetorImpar.length);
    console.log(vetorPar, vetorImpar);
}

vetorParImpar([1,2,3,4,5,6,7,8,9,10]);