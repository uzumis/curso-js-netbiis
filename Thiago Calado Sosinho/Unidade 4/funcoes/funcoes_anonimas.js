//Funções anonimas e expressões de função

//Funcção anônima
const teste = function(){
    console.log('Função Anônima');
}

const arrowReceba = () =>{
    console.log('Receba');
}

const arrowSoma = (a,b) => a+b;
let arrowImc = (peso, altura) => (peso/(altura**2)).toFixed(2);
arrowReceba();
console.log(arrowSoma(1,2));
console.log(arrowImc(120,1.82));
teste();