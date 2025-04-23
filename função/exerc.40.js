function conceitosDasNotas(vetorNotas){
    for(i = 0; i < vetorNotas.length; i++){
        if(vetorNotas[i] >= 0 && vetorNotas[i] <= 4.9){
            console.log("Conceito D");
        }
        //else if(5 <= vetorNotas[i] <= 6.9){
        else if(vetorNotas[i] >= 5 && vetorNotas[i] <= 6.9){
            console.log("Conceito C");
        }
        else if(vetorNotas[i] >= 7 && vetorNotas[i] <= 8.9){
            console.log("Conceito B");
        }
        else{
            console.log("Conceito A");
        }
    }
}

conceitosDasNotas([1.1,2,3,4,5,6,7,8,9,10]);