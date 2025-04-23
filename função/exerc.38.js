function numerosImpares(inicio = 0, fim = 100){
    if (inicio > fim) {
        inicio = fim + inicio
        fim = inicio - fim
        inicio = inicio - fim        
    }
    for(;inicio <= fim; inicio++){
        if(inicio % 2 != 0){
            console.log(inicio);
        }
    }
}

numerosImpares(3,19);