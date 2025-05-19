'Solução 1'
function despesasTotais(produtos){
    let despesas = 0;
    for(let i = 0; i < produtos.length; i++){
        despesas += produtos[i].preco;
    }
    return despesas;
}
'Solução 2'
function despesasTotais2(produtos){
    return produtos.reduce((despesas, produto) => despesas + produto.preco, 0);
}
'Solução 3'
function despesasTotais3(produtos){
    let despesas = 0
    produtos.forEach(produto => despesas += produto.preco);
    return despesas;
}
'Solução 4'
function despesasTotais4(produtos){
    let despesas = 0;
    for(let produto of produtos){
        despesas += produto.preco;
    }
    return despesas;
}

function despesasTotais5(produtos) {
    return produtos
    .map(produto => produto.preco)
    .reduce((acumulador, valorAtual) => acumulador + valorAtual)
}   
        
console.log(despesasTotais([{nome: "MacBook", preco: 16.90}, {nome: "Patinenete", preco: 100.00}]))
console.log(despesasTotais2([{nome: "MacBook", preco: 16.90}, {nome: "Patinenete", preco: 100.00}]))
console.log(despesasTotais3([{nome: "MacBook", preco: 16.90}, {nome: "Patinenete", preco: 100.00}]))
console.log(despesasTotais4([{nome: "MacBook", preco: 16.90}, {nome: "Patinenete", preco: 100.00}]))
console.log(despesasTotais5([{nome: "MacBook", preco: 16.90}, {nome: "Patinenete", preco: 100.00}]))