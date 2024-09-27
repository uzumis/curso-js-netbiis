const arr = [1,2,3,4,5];


//concat() retorna um novo array com os elementos concatenados
let arrConcat = arr.concat(7,8,9);
console.log(arrConcat); //criado array novo com os valores acima
console.log(arr); //array original

// join() retorna uma string com elementos do array separados por um delimitador
let str = arr.join('-');
console.log(str); // String separados por '-'

//reverse() reverte o ordem dos elementos do array
let arrReverse = [...arr];
arrReverse.reverse();
console.log(arrReverse);
console.log(arr);

//toReversed()retorna um novo array com os elementos invertidos sem modificar o array original
let arrayToReverse = arr.toReversed()
console.log(arrayToReverse);
console.log(arr);