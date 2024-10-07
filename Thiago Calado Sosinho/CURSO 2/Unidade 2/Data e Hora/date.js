let agora = new Date();
console.log(agora);
let dataEspecifica1 = new Date(2021, 7, 14, 22, 15, 30);
console.log(dataEspecifica1);
let dataEspecifica2 = new Date('2021-08-14T22:15:30');
console.log(dataEspecifica2);
let dataEspecifica3 = new Date ('2021-08-14');
console.log(dataEspecifica3);

// Pegando dados especificos

console.log(agora.getFullYear());
console.log(agora.getMonth() +1);
console.log(agora.getDate());
console.log(agora.getDay());


let teste = new Date(1728001556826);
console.log(teste);
const dataCompleta = `${agora.getDate()}/${agora.getMonth()+1}/${agora.getFullYear()}`;
console.log(dataCompleta);
