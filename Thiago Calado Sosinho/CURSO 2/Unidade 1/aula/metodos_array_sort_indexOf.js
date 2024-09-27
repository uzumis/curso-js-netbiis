let arr = [2,3,7,4,8,1];

//sort() modifica o array origina, ordenando os elementos
//toSorted() retorna o array novo com os elementos ordenados, sem modificar o array original
let arrayOrdenado = arr.toSorted();
console.log(arrayOrdenado);
console.log(arr);
arr.sort();
console.log(arr);
arr.push(4);

// indexOf() retorna o indice do primeiro elemento encontrado no arrayy
let indice = arr.indexOf(4);
console.log(indice);

//lastIndexOf() retorna o indice do ultimo elemento encontrado no array
let ultimoIndice = arr.lastIndexOf(4);
console.log(arr);
console.log(ultimoIndice);