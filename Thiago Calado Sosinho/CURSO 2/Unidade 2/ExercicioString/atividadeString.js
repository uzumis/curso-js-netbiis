
//substituir palavra
function substituirPalavra(frase, palavra,novaPalavra){
    return frase.replace(palavra, novaPalavra);
}

console.log(substituirPalavra('Eu gosto de amizades', 'amizades', 'cerveja'));

//contar palavra
function contarPalavra(frase){
   return frase.split(" ").length;
}
console.log(contarPalavra("Eu gosto de farofa"));


//extrairIniciais
function extrarIniciais(frase){
    let iniciais = '';
    for (let i = 0; i < frase.split(" ").length;i++){
        iniciais += frase.split(" ")[i].charAt(0)+".";
    }
   return iniciais;
}
console.log(extrarIniciais("Thiago Calado Sosinho"));

//contarVogais
function contarVogais(frase) {
    return frase.toLowerCase().split('').filter(letra => 'aeiou'.includes(letra)).length;
}
console.log(contarVogais("Eu gosto de cebola"));