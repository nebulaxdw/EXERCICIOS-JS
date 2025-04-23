function cedulas(valor){
    cont_1 = 0;
    cont_5 = 0;
    cont_10 = 0
    cont_50 = 0;
    cont_100 = 0;
    for(i = valor; i >= 0; i--){
        if(valor <= 100){
            cont_100++;
            valor = valor - cont_100*100;
            break;
        }
        if(valor >= 50 <= 99){
            cont_50++;
            valor -= cont_50*50
            break;
        }
        if(valor >= 10 <= 49){
            cont_10++;
            valor = valor - cont_10*10;
            break;
        }
        if(valor > 1 <= 5){
            cont_5++;
            valor -= cont_5*5;
            break;
        }
        else{
            cont_1++;
            valor -= cont_1*1;
            break;
        } 
    }
    return(`${valor} = ${cont_100} notas de R$ 100, ${cont_50} notas de R$ 50, ${cont_10} notas de R$ 10, ${cont_5} notas de R$ 5 e ${cont_1} notas de R$ 1`);
}
console.log(cedulas(100));
console.log(cedulas(50));