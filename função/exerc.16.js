const readline = require('readline-sync');
function calculadora(){
    while(true){
        n1 = readline.question("Digite um numero: ")
        n2 = readline.question("Digite outro numero: ");
        operacao = readline.question("Digite a operacao: ");
        switch(operacao){
            case "+":
                console.log(parseInt(n1)+parseInt(n2));
                break;
            case "-":
                console.log(n1-n2);
                break;
            case "*":
                 console.log(n1*n2);
                 break;
            case "/":
                 console.log(n1/n2);
                 break;
            case "%":
                console.log(n1%n2);
                break;
            case "^":
                console.log(n1**n2);
                break;
            default:
                console.log("Operação inválida!");
                break;
        }
        continuar = readline.question("Continuar? [S|s] || [N|n]");
        if(continuar == 'N' || continuar == 'n'){
             break;
        }
    }
}

calculadora(1,"+",3);
//console.log(calculadora(1,"-",3));
//console.log(calculadora(1,"*",3));
//console.log(calculadora(1,"/",3));