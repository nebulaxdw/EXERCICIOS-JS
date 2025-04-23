    const retornoFruta = function(fruta){
        switch(fruta){
        case "maça":
            return "Não vendemos essa fruta aqui!";
        case "kiwi":
            return "Estamos com escassez de kiwis";
        case "melancia":
            return "Aqui está, são 3 reais o quilo.";
        
        default:
            try{
    
            }
            finally{
                return "o seguinte item não se encontra cadastrado em nosso sistema";
            }
        }
    }


console.log(retornoFruta("maça"));
console.log(retornoFruta(1));