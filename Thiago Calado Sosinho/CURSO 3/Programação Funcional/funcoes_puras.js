function calcularIMC(peso, altura){
    return peso / (altura * altura);
} //PURO

let volume = 0;
function aumentarVolume(incremento){
    volume+=incremento;
    return volume;
}//IMPURA

console.log(calcularIMC(80, 1.8) == calcularIMC(80, 1.8) );
console.log(aumentarVolume(80) == aumentarVolume(80) );