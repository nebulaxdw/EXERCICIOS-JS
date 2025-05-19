function objetoParaArray(objeto){
    resultado = [];
    for(chave in objeto){
        resultado.push([chave, objeto[chave]]);
    }
    return resultado;
}
function objetoParaArray1(objeto_1){
    resultado = [];
    resultado.push([objeto_1]).toString().replace()
    return resultado;
}
console.log(objetoParaArray({nome: "Thiago", profissão: "Projetista de Mapas", numero: 1}));
console.log(objetoParaArray1({nome: "Thiago", profissão: "Projetista de Mapas"}));
console.log(objetoParaArray1())