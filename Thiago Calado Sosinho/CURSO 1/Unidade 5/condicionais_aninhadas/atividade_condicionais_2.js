let nota = 90;

console.log('Nota aluno: ' + nota);
if (nota < 50) {
    console.log('Insuficiente');
} else if (nota >= 50 && nota <= 69) {  
    console.log('Regular');
} else if (nota >= 70 && nota < 90) { 
    console.log('Bom');
} else if (nota >= 90 && nota <= 100) {
    console.log('Excelente');
} else {
    console.log('Nota inválida');
}
