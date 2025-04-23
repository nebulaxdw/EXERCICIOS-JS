function valorAnuidade(mês, valor){
    switch(mês){
        case 1:
            return `O valor do pagamento da anuidade no mês de janeiro é de   R$ ${valor}`;
        case 2:
            montante = valor*(1+0.05)^mês
            return `O valor do pagamento da anuidade no mês de janeiro é de   R$ ${valor+jurosCompostos}`;
        case 3:
            montante = valor*(1+0.05)^mês;
            jurosCompostos = montante - valor;
            return `O valor do pagamento da anuidade no mês de marçoo é de   R$ ${valor+jurosCompostos}`;
        case 4:
           montante = valor*(1+0.05)^mês;
           jurosCompostos = montante - valor;
           return `O valor do pagamento da anuidade no mês de janeiro é de   R$ ${valor}`;
        case 5
        }