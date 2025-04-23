function AlunoAprovadoReprovado(codigo, [nota1, nota2, nota3]){
    if(parseInt(codigo) < 0){
        return "Código do aluno inválido!"
    }
    maiorNota = nota1;
    menorNota_1 = nota2;
    menorNota_2 = nota3;
    if(nota2 > maiorNota){
        maiorNota = nota2;
        menorNota_1 = nota1;
        menorNota_2 = nota3;
    }
    else if(nota3 > maiorNota){
        maiorNota = nota3;
        menorNota_1 = nota1;
        menorNota_2 = nota2;
    }
   
    mediaPonderada = (4*maiorNota + 3*menorNota_1 + 3*menorNota_2)/(4 + 3 + 3);
    if(mediaPonderada >= 5){
        return `Aluno Aprovado. Código: ${codigo}, Notas: ${[maiorNota, menorNota_1, menorNota_2]}, Media: ${mediaPonderada}`;
    }
    else return "Aluno Reprovado"
}

console.log(AlunoAprovadoReprovado("100", [6,7,4]));
console.log(AlunoAprovadoReprovado("100", [7,6,4]));
console.log(AlunoAprovadoReprovado("100", [6,4,7]));
console.log(AlunoAprovadoReprovado("100", [undefined=0,5,undefined=0]));
console.log(AlunoAprovadoReprovado("100", [6,10,undefined=0]));
console.log(AlunoAprovadoReprovado("-100", [6,10,undefined=0]));
console.log(AlunoAprovadoReprovado("-101", [6,10,undefined=0]));
