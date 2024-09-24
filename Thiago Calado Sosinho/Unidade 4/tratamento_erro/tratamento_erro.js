let numero = 10;
try {
    //TypeError
    console.log(numero.toUpperCase);

    //ReferencError
    console.log(teste);

    //SyntaxError
    // console.log('teste);

} catch (erro) {
    console.log("Um erro aconteceu: ", erro.message);
} finally {
    console.log('Fim do try/catch');
};
