const dataAtual = new Date();
const diaEmMilissegunbdos = 24 * 60 * 60 * 1000;

const dataExpiracao = new Date(dataAtual.getTime() + 5*diaEmMilissegunbdos);
console.log(dataExpiracao);

//Modificando hora
dataExpiracao.setHours(0,0,0,0);
//Modificando dia
dataExpiracao.setDate(5);
//Modificanmdo o mes 
dataExpiracao.setMonth(5);
//Modificando ano
dataExpiracao.setFullYear(2022);
//Modificando minuto
dataExpiracao.setMinutes(30);
//Modificando segundo
dataExpiracao.setSeconds(15);

console.log(dataExpiracao);