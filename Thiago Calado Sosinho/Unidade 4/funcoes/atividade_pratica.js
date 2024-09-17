
//funcoes
function multiplicaValores(a, b) {
    return a * b;
}

 //funcao arrow
const divisao = (a, b) => a / b;
const potenciaArrow = (base, expoente) => Math.pow(base, expoente);

//funcao anonima
const subtrair = function(a, b) {
    return a - b;
};

//funcao arrow com template string
const pitagoras = (lado1, lado2) => (`O quadrado da hipotenusa eh a soma do quadrado dos catetos, 
Dado os catetos ${lado1} e ${lado2}, podemos calcular a hipotenusa.
logo sua hipotenusa sera: ${Math.sqrt(Math.pow(lado1, 2) + Math.pow(lado2, 2), 2)}`);

console.log("Multiplicação =====", multiplicaValores(2, 3));//6
console.log("Divisão =====", divisao(6, 2));//3
console.log("Subtração ======", subtrair(10, 5));//5
console.log("Potenciação =====", potenciaArrow(3, 2));//9
console.log(pitagoras(3, 4)); //10

