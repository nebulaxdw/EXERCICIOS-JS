function PagamentoPlanoDeSaude(idade){
        if(idade < 10){
            return `Criaça com menos de 10 anos. O valor do plano é de R$ ${180}`;
        }
        else if(idade <= 30){
            return `Conveniado com idade entre 10 a 30 anos. O valor do plano é de R$ ${150}`;
        }
        else if(idade <= 60){
            return `Conveniado com idade acima de  30 até 60 anos. O valor do plano é de R$ ${195}`;
        }
        else{
            return `Conveniado acima de 60 anos. O valor do plano é de R$ ${230}`;
        }
        

}
console.log(PagamentoPlanoDeSaude(10));
console.log(PagamentoPlanoDeSaude(30));
console.log(PagamentoPlanoDeSaude(9));
console.log(PagamentoPlanoDeSaude(60));