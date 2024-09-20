let idade = 64;
console.log('Idade: '+idade);
if (idade <=12){
    console.log ("Criança");
} else if( idade >= 13 && idade <=17){
    console.log("Adolescente");
}else if (idade >=18 && idade <64){
    console.log("Adulto");
}else if (idade >=64) {
    console.log("Idoso");
}else{
    console.log("O valor é invalido");
}
console.log("Fonte: https://querobolsa.com.br/enem/geografia/faixa-etaria");