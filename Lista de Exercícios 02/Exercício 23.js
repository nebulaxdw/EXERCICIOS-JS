function contarCaractere(caracter, frase){
    let cont = 0
    for(i of frase){
        if(caracter == i){
            cont += 1
        }
    }
    return cont
}

function contarCaractere2(caractereBuscado, frase) {
    return [...frase].filter(caractere => caractere === caractereBuscado).length
    }
    
console.log(contarCaractere('e', 'Eu gosto de doces'));
console.log(contarCaractere('E', 'Eu gosto de doces'));