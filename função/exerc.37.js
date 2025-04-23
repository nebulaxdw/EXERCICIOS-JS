function ProgressaoAritmetica(n,a1,r){
    vetorProgArit = [];
    //deletaVetor(vetorProgArit);
    for(i = 0; i < n; i++){
        vetorProgArit.push(a1 + r*i); 
    }
    console.log(`A soma da Progressão Aritmética é: ${somaVetor(vetorProgArit)}`);
    return vetorProgArit;
}

function ProgressaoGeometrica(n,a1,r){
    vetorProgGeomet = [];
    //deletaVetor(vetorProGeomet);
    for(i = 0; i < n; i++){
        vetorProgGeomet.push(a1*(r**i));
    }
    console.log(`A soma da Progressão Aritmética é: ${somaVetor(vetorProgGeomet)}`);
    return vetorProgGeomet;
}
function somaVetor(vetor){
    soma = 0;
    for(i = 0; i < vetor.length; i++){
        soma += vetor[i];
    }
    return soma;
}

function deletaVetor(vetor){
    for(i = 0; i < vetor.lenth; i++){
        vetor.splice(0, vetor.length)
    }
}

console.log(ProgressaoAritmetica(3,4,2));
console.log(ProgressaoAritmetica(3,4,2));
console.log(ProgressaoGeometrica(5,-1,3));
console.log(ProgressaoGeometrica(5,2,2))