arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 4, 5, 6, 2, 3, 4, 5, 6, 6, 7, 8, 8, 9, 1, 1, 1, 1, 1];

//PRIMEIRA ATIVIDADE FILTRA PARES
function filtraPares(arr) {
    let pares = arr.filter(item => item % 2 == 0);
    return pares;
}

let filteredArr = filtraPares(arr);
console.log('Numeros pares: '+ filteredArr);

//SEGUNDA ATIVIDADE
function multiplicaArray(arr, multiplicador){
   let multiplica =  arr.map((item) => item * multiplicador);
   return multiplica;
}

let multiplicaArr = multiplicaArray(arr, 2);
console.log('Numeros multiplicados: '+multiplicaArr);

//TERCEIRA ATIVIDADE
function contaOcorrencias(arr, num) {
    let numOcorrencias = arr.filter((item) => item == num);
    return numOcorrencias.length;
}

let nOcorrencia = contaOcorrencias(arr, 1);
console.log('Numeros numero de ocorrencias: '+nOcorrencia); 


