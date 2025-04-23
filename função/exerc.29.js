function observarIntervalo (vetor) {
    qtdNumerosNoIntervalo = 0;
    qtdNumerosForaDoIntervalo = 0;
    for (i = 0; i < vetor.length; i++) {
        if(vetor[i] >= 10 && vetor[i] <= 20){
            qtdNumerosNoIntervalo++;
        }
        else qtdNumerosForaDoIntervalo++;
    }
    return `${qtdNumerosNoIntervalo} números dentro do intervalo, ${qtdNumerosForaDoIntervalo} números fora do intervalo.`
}

vetor = [ 7, 8, 9, 10, 11, 12, 16, 17, 18, 19, 20, 21]
vetor_1 = [, 7, 8, 9, 10, 11, 12, 16, 17, 18, 19, 20, 21]
console.log(observarIntervalo(vetor))
console.log(observarIntervalo(vetor_1))
