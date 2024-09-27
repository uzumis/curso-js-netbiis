const arr = [1,2,3,4,5];

const dobroArr = arr.map((item) => item *2);
console.log(dobroArr);


const alunos = [
    { nome: 'João',idade: 14, notas: [1,5,3]},
    { nome: ' Maria',idade: 14, notas: [7,5,4]},
    { nome: 'Zezim',idade: 14, notas: [10,7,4]}
]


const alunosComMedia = alunos.map(aluno =>{
    let somaNotas = 0;
    aluno.notas.forEach(nota=>{
        somaNotas+=nota;
    })
    const media = (somaNotas/aluno.notas.length).toFixed(2);

   return {media, ...aluno};

})

alunos.forEach(aluno => console.log(aluno));
console.log('=============='); 
alunosComMedia.forEach(aluno => console.log(aluno));
