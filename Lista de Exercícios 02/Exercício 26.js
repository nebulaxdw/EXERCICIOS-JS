function inverter(objeto_1){
    objeto_2 = {}
    for([key,value] in Object.entries(objeto_1)){
        objeto_2["key"]  = objeto_1["value"];
    }
    return objeto_2;
}
console.log(inverter({a: 1, b: 2, c:3}))