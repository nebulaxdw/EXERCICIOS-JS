const retornaDiaValido = function(dia){
    switch(dia){
    case 1:
        return "Final de Semana!";
    case 2: case 3: case 4: case 5: case 6:
        return "Dia da Semana!";
    case 7:
        return "Final de Semana!";
    
    default:
        return "Dia inválido!";
    }
}

console.log(retornaDiaValido());
console.log(retornaDiaValido(1));
console.log(retornaDiaValido(2));
console.log(retornaDiaValido(3));
console.log(retornaDiaValido(4));
console.log(retornaDiaValido(5));
console.log(retornaDiaValido(6));
console.log(retornaDiaValido(7));

