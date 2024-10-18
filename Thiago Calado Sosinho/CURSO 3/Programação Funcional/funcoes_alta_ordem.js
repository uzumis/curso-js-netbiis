function aplicarOperadcao(a,b, operacao){
    return operacao(a,b);
}

function somar(a,b){
    return a+b;
}

function subtrair(a,b){
    return a-b;
}

const r1 = aplicarOperadcao(1,2,somar);
const r2 = aplicarOperadcao(1,2, subtrair);

console.log(r1);
console.log(r2);