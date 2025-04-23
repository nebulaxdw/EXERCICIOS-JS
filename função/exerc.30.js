function maiorMenorNoVetor(vetor){
    menor = maior = vetor[0]
    for(i = 0; i <= vetor.length; i++){
        if(vetor[i] > maior){
            maior = vetor[i];
        }
        else if(vetor[i] < menor){
            menor = vetor[i];
        }
    }
    //return `O maior valor contido no vetor é ${maior} e o menor é ${menor}`;
    return(`${maior, menor}`);
}

console.log(maiorMenorNoVetor([1,2,3,4,5,6,7,8,9,10]));