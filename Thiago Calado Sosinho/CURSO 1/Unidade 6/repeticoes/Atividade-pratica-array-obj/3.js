//Crie um array de objetos onde cada objeto representa um aluno com suas notas. Use for...of para iterar sobre o
//array, e for...in para somar as notas de cada aluno. Depois, filtre e exiba os alunos que têm uma média acima de 7.
let notasAlunos = [
    { nome: 'Zezinho Madrugada', notas: [10, 9, 8] },
    { nome: 'João Picolé', notas: [8, 7, 9] },
    { nome: 'Maria Pipoca', notas: [7, 6, 5] },
    { nome: 'Ana Bananal', notas: [9, 8, 7] },
    { nome: 'Pedro Foguete', notas: [5, 4, 6] },
    { nome: 'Carlos Rolha', notas: [6, 5, 7] },
    { nome: 'Tadeu Marmita', notas: [4, 3, 5] },
    { nome: 'Beto Rabisco', notas: [3, 2, 4] },
    { nome: 'Juliana Sorvete', notas: [7, 7, 8] },
    { nome: 'Ricardo Chuteira', notas: [2, 1, 3] }
];

console.log(`========LISTAO DOS APROVADOS DA ESCOLINHA DO BARULHO==========`)
for (let aluno of notasAlunos) {

    for (let key in aluno) {
        if (key === 'notas') {
            let notaFinal = 0;
            for (let nota of aluno.notas) {
                notaFinal += nota;
            }
            notaFinal = (notaFinal/aluno.notas.length).toFixed(2);
            if (notaFinal>7){
            console.log(`Nome: ${aluno.nome}`); 
            console.log(`Nota final: ${notaFinal}`);
            }
        }
    }
}
