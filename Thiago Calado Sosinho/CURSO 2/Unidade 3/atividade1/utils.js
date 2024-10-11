function calcularIMC(peso, altura){
    let resultado = peso /(altura **2);
    return resultado.toFixed(2);
}

function calculadora(numero1, numero2, operador) {

    switch (operador) {
        case 'soma':
            return (numero1 + numero2);
        case 'subtracao':
            return (numero1 - numero2);
        case 'multiplicacao':
            return (numero1 * numero2);
        case 'divisao':
            if (numero2 == 0) {
                return'Inválido divisão por zero'
            }
            return (numero1 / numero2);
    }
}

module.exports = {calculadora,calcularIMC};
