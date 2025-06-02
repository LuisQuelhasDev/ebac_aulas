class Diario{
    constructor(aluno, nota){
        this.nome = aluno;
        this.nota = nota;
    }
}

const notas = [
    new Diario("Luisa", 8),
    new Diario("Lucas", 6),
    new Diario("Gabriela", 5),
    new Diario("Pedro", 7),
    new Diario("Julia", 5.5)
];

function media(aprovados){
    return aprovados.filter(function(alunos){
        return alunos.nota >= 6;
    })
}

const aprovados = media(notas);
console.log(aprovados);