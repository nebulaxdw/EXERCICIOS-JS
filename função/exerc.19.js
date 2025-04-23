function CardapioLanchonete(código, quantidade){
    switch(código){
        case "100":
            return `O seu pedido é/são ${quantidade} Cachorro(s)-quentes e ficará no total de R$ ${(quantidade*3).toFixed(2).replace(".", ",")}`;
        case "200":
            return `O seu pedido é/são ${quantidade} Hambúrguer(es) simple(s) e ficará no total de R$ ${(quantidade*4).toFixed(2).replace(".", ",")}`;
        case "300":            
            return `O seu pedido é/são ${quantidade} Cheesebúrguer(es) simple(s) e ficará no total de R$ ${(quantidade*5.50).toFixed(2).replace(".", ",")}`;
        case "400":            
            return `O seu pedido é/são ${quantidade} Bauru(s) e ficará no total de R$ ${(quantidade*7.50).toFixed(2).replace(".", ",")}`;
        case "500":            
            return `O seu pedido é/são ${quantidade} Refrigerante(s) e ficará no total de R$ ${(quantidade*3.50).toFixed(2).replace(".", ",")}`;
        case "600":            
            return `O seu pedido é/são ${quantidade} Suco(s) e ficará no total de R$ ${(quantidade*2.80).toFixed(2).replace(".", ",")}`;
    }                                                                                                                                           
}

console.log(CardapioLanchonete("100", 3));
console.log(CardapioLanchonete("200", 5));
console.log(CardapioLanchonete("600", 6));
