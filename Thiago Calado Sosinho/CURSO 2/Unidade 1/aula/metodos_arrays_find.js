const arr = [1,2,3,4,5];

//FIND retorna o valor do array
const maiorQueTres = arr.find((elemento)=>elemento>3);

console.log('Primeiro elemento maior que 3=' +maiorQueTres); //4

//FIND INDEX retorna o indice do array
const indiceMaiorQueTres = arr.findIndex((elemento)=>elemento>3);
console.log('Indice do primeiro elemento maior que 3=' +indiceMaiorQueTres); //3

// some() retorna true se pelo menos um elemento satisfaz a condicao
const temMaiorQueTres = arr.some((elemento)=>elemento>3);
console.log('Tem maior que 3=' +temMaiorQueTres);

//every() retorna true se TODOS os elementos satisfazem a condicao
const todosMaiorQueTres = arr.every((elemento)=>elemento>5);
console.log('Todos maiores que 3=' + todosMaiorQueTres);

//every() retorna true se TODOS os elementos satisfazem a condicao
const todosMaiorQueZero = arr.every((elemento)=>elemento>0);
console.log('Todos maiores que 0=' +todosMaiorQueZero);

//include() retorna true se o elemento esta no array
const temCinco = arr.includes(5);
console.log("Tem 5 = "+ temCinco);