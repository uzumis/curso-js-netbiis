//Composição de funções: é a junção de funções para resolver um problema.

function calcularSalario(salarioBase, percentDesconto, percentBonus){
    const desconto = getValor(salarioBase, percentDesconto);
    const bonus = getValor(salarioBase, percentBonus);
    return salarioBase - desconto + bonus;
}

function getValor( valor, porcentage){
    return valor * (porcentage/100);
}

console.log(calcularSalario(2000,5,20));