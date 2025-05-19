function receberMelhorEstudante(alunos){
    melhorAluno = {}
    media = soma = 0
    for([key,value] in Object.entries(alunos)){
        if(key = "nome"){
            melhorAluno[key] = alunos["nome"]
        }
        for(let i = 0; i < alunos["nota"].length; i++){
            soma+= alunos["nota"][i];
        }break
    }
    for(aluno in alunos){
        media = soma/alunos["nota"].length;
        aluno["media"] = media;
        if(aluno["media"] > media){
            console.log(aluno[media]);
            media = aluno["media"];
        }
    }
    melhorAluno["media"] = media;
    return melhorAluno;
}
console.log(receberMelhorEstudante(
     {nome: "Mariana", nota: [9, 6.6, 7.9, 8]},
     {nome: "Carla", nota: [10, 10, 10, 10]}, // média 7.75
     {nome: "Joao", nota: [8, 7.6, 8.9, 6]}));
