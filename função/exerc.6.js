function jurosSimples(cap_inicial, taxa_de_juros, tempo){
    montante = cap_inicial + (cap_inicial * taxa_de_juros * tempo)
    return montante;
}
function jurosCompostos(cap_inicial, taxa_de_juros, tempo){
    montante = cap_inicial * (1 + taxa_de_juros)**tempo
    return montante;
}


console.log(jurosSimples(2,3,4));
console.log(jurosCompostos(2,3,4));