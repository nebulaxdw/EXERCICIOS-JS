function verificaTriangulo(a,b,c){
    if(a == b == c){
        return "Triângulo equilátero";
    }
    
    else if(a == b || b == c || a == c){ 
        return "Triangulo isósceles";
    }

    else{
        return "Triãngulo escaleno";
    }
   
}

console.log(verificaTriangulo(3,3,1));
console.log(verificaTriangulo(20,20,1));
console.log(verificaTriangulo(1,2,2));
console.log(verificaTriangulo(1,2,1));
console.log(verificaTriangulo(1,1,3));
