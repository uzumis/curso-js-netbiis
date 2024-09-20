let valor = 90;
let desconto = valor*0.1;
let valorFinal = valor - desconto;
if (valor > 100){
    console.log('Valor maior que 100 reais, desconto de '+desconto+' aplicado! O valor total será de '+ valorFinal );
} else{
    console.log('Valor inferior ou igual a 100 reais. Valor total: R$'+ valor );
}