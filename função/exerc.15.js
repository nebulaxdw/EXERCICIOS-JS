function comprarCarro(modelo){
    switch(modelo){
        case "hatch":
            return "Compra efetuada com sucesso";
    
        case "sédans":  case "motocicletas": case "caminhonetes":
            return "Tem certeza que não prefere este modelo?";
            
        default:
            return "Não trabalhamos com este tipo de automóvel aqui."
   }

}

console.log(comprarCarro(1));
console.log(comprarCarro("hatch"));
console.log(comprarCarro("sédans"));
console.log(comprarCarro("motocicletas"))
console.log(comprarCarro("caminhonetes"))