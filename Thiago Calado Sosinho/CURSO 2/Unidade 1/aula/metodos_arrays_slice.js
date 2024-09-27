const arr = [1,2,3,4,5,6];

//slice () retorna um novo array a partide de um indice inicial ate um indice final

const subArr = arr.slice(1,6);
console.log(subArr); //[2,3,4,5,6]
console.log(arr); 

//splice() remove elementos de um array e opcionalmente adiciona novos elementos
const removed = arr.splice(1,3,4,7,8,9);
console.log(removed); //elementos excluidos
console.log(arr); //array modificado com os elementos restantes