"Solução 1"
function checarAnoBissexto(ano){
    if(ano % 4 == 0 && ano % 100 != 0){
        return true;
    }
    else if(ano % 100 == 0 && ano % 400 == 0){
        return true;
    }
    else return false;
}

"Solução 2"
function checarAnoBissexto2(ano){
    const divisivelPorQuatro = ano % 4 == 0;
    const divisivelPorCem = ano % 100 == 0;
    const divisivelPorQuatrocentos = ano % 400 == 0;
    return(divisivelPorQuatro && !divisivelPorCem) || divisivelPorQuatrocentos;
}

"Solução 3"
function checarAnoBissexto3(ano){
    return new Date(ano, 1, 29).getDate() === 29;
}
console.log(checarAnoBissexto(2020));
console.log(checarAnoBissexto(2100));
console.log(checarAnoBissexto2(2100));
console.log(checarAnoBissexto2(2020));
console.log(checarAnoBissexto3(2100));
console.log(checarAnoBissexto3(2020));