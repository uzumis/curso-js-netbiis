
//Crie um array de números e use um loop for...of para calcular e exibir a soma de todos os elementos do array.
let array = [1,2,3,4,5];
calc = 0;
for (let index of array){
    calc = calc + parseInt(index);
}
console.log(calc);