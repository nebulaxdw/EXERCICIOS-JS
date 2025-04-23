function Aumento(planoDeTrabalho, salarioAtual){
    switch(planoDeTrabalho){
        case "A":
            aumento = salarioAtual * 0.10;
            novoSalario = aumento + salarioAtual;
            return `O aumento foi de ${aumento.toFixed(2)} e o novo salário é de ${novoSalario.toFixed(2)}`;
        case "B":
            aumento = salarioAtual * 0.15;
            novoSalario = aumento + salarioAtual;
            return `O aumento foi de ${aumento.toFixed(2)} e o novo salário é de ${novoSalario.toFixed(2)}`;
        case "C":
            aumento = salarioAtual * 0.20;
            novoSalario = aumento + salarioAtual;
            return `O aumento foi de ${aumento.toFixed(2)} e o novo salário é de ${novoSalario.toFixed(2)}`;
    }
}

console.log(Aumento("A", 1412.00));
console.log(Aumento("B", 1412.00));
console.log(Aumento("C", 1412.00));