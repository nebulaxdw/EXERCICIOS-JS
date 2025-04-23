function trocaDeVetores(vetorA, vetorB){
    if(vetorA.length == vetorB.length){
        for(i = 0; i < vetorA.length; i++){
            vetorA[i] = vetorA[i] + vetorB[i]
            vetorB[i] = vetorA[i] - vetorB[i]
            vetorA[i] = vetorA[i] - vetorB[i]
        }
    }
    else console.log("Vetores de tamanhos diferentes");
    console.log(vetorA, vetorB);
}

trocaDeVetores([1,2,3], [4,5,6]);
trocaDeVetores([1,2,3], [4,5, ]);