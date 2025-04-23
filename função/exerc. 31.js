function numerosNegativos(vetor){
    cont = 0;
    for(i = 0; i <= vetor.length; i++){
        if(vetor[i] < 0){
            cont += 1;
        }
    }
    return cont;
}

console.log(numerosNegativos([-1,-2,-3,-4,-5,-6,-7,1,2,3,4,5,6,7]));