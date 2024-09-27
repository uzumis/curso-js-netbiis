//Crie um objeto com pelo menos 5 propriedades diferentes (nome, idade, cidade, etc.). Use um loop for...in para iterar
//sobre as propriedades do objeto e imprimir tanto as chaves quanto os valores.
let obj = {
    nome:'Thiago',
    idade: 32,
    cidade: 'Belem',
    estado: 'PA',
    sexo: 'Masculino'
}

for (let key in obj){
    console.log (key+':'+obj[key])
}