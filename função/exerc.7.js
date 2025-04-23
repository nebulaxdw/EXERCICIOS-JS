function calculaFormulaBhaskara(ax2, bx, c){
    delta = bx**2 - 4*ax2*c;
    resultados = []
    x1 = (-bx+Math.sqrt(delta))/2*ax2;
    x2 = (-bx-Math.sqrt(delta))/2*ax2;
    if(delta < 0){
        return "Delta negativo"
    }
    else{
        vetor.push(x1,x2)
        return vetor;
    }
}

console.log(calculaFormulaBhaskara(7,3,4));
console.log(calculaFormulaBhaskara(1,-3,-54));