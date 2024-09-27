function somarValores( a, b){
    return a + b;
}
function calcularIMC(peso, altura){
    let resultado = peso /(altura **2);
    return resultado.toFixed(2);
}

function mensagemBoasVindas(){
    console.log('---------------------');
    console.log('-BEM VINDO AO SITE-');
    console.log('---------------------');
}
let resultado = somarValores(1,1);
let resultado2 = somarValores(5,2);
let resultado3 = somarValores(4,2);
let resultado4 = somarValores(9,4);
let resultado5 = somarValores(5,2);

console.log(resultado);
console.log(resultado2);
console.log(resultado3);
console.log(resultado4);
console.log(resultado5);

let imc1 = calcularIMC(120, 1.81);
console.log(imc1);
mensagemBoasVindas();