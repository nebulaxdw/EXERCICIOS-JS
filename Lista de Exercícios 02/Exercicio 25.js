function removerVogais(frase){
    vogais = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
    for(let i = 0; i < frase.length; i++){
        for(vogal of vogais){
            if(vogal == frase[i]){
                frase = frase.replace(vogal,"")
            }
        }
    }
    return frase;
}
function removerVogais2(frase){
    vogais = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
    vogais.forEach(vogal => frase = frase.replace(vogal, ''));
    return frase;
}
function removerVogais3(frase) {
    return frase.replace(/[aeiou]/ig, '')
}
console.log(removerVogais("Cod3r"))
console.log(removerVogais("Fundamentos"))
console.log(removerVogais2("Fundamentos"))
console.log(removerVogais3("Fundamentos"))
console.log(removerVogais3("Pão"))