'Solução 1'
function buscarPalavrasHomogeneas(palavra, arrayDePalavras){
    palavrasFiltradas = []
    for(let i = 0; i < palavra.length; i++){
        for(string of arrayDePalavras){
            if(palavra[i] == string[i]){
                palavrasFiltradas.push(string)
            }
        }break
    }
    return palavrasFiltradas;
}

'Solução 2'
function buscarPalavrasSemelhantes(inicio, palavras) {
const resultado = []
 for (let palavra of palavras){
    if (palavra.includes(inicio)){
        resultado.push(palavra)
    }
 }
 return resultado;
}
'Solução 3'
function buscarPalavrasParecidas(inicio, palavras) {
    return palavras.filter(palavra => palavra.includes(inicio))
}

console.log(buscarPalavrasHomogeneas("pro", ["programação", "mobile", "profissional"])) // retornará ["programação", "profissional"]


console.log(buscarPalavrasParecidas("java", ["javascript", "java", "c++"]));
console.log(buscarPalavrasSemelhantes("java", ["javascript", "java", "c++"]));