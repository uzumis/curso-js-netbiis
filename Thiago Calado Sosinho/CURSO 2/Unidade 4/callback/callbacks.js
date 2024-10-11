function somarValores(valor1, valor2, callback){
    var resultado = valor1+valor2;
    callback(resultado);
}

somarValores(10,20, console.log);