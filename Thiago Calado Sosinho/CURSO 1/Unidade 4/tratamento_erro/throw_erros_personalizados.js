function somarValores(valor1,valor2){
    if (typeof valor1 !=="number" ||  typeof valor2 !== "number"){
        throw new TypeError("Valores devem ser numeros");
    }
    return valor1 + valor2;
}

try{
    somarValores(1,2);
    somarValores('string','string');
} catch (erro){
    console.error(erro.message);
    console.error(erro.name);
    console.error(erro.stack);

}