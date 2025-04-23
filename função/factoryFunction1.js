//Factory simples
function criarProduto(nome, preco){
    return{
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto("Thomaz", 200.00));
console.log(criarProduto('iPad', 1149.49));

