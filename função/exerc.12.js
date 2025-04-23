function calcula_fatorial(n){
    for(i = n-1; i >= 1; i--){
        n *= i;
    }
    return n;
}

console.log(calcula_fatorial(4));
console.log(calcula_fatorial(5));
console.log(calcula_fatorial(6));
