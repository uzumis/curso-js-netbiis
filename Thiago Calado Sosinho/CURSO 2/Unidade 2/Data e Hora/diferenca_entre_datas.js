const agora = new Date();

const dataEspecifica1 = new Date(2021, 7, 14, 22, 15, 30);

const diferencaEntreDatas = agora - dataEspecifica1;
console.log(diferencaEntreDatas);
//Diferenca em dias
const diaEmMilissegundos  = 24 * 60 * 60 * 1000;
const diferencaEmDias = (diferencaEntreDatas/diaEmMilissegundos).toFixed(0);
console.log(diferencaEmDias);