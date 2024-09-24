const arr = [1, 2, 3, 4, 5];

for (let index in arr){
    console.log(arr[index]);
}

console.log(`------------------`);
const obj = {nome: 'ronaldo', nome2: 'thiago', nome3: 'calado' };

for (let key in obj){
    console.log(key+': '+obj[key]);
}