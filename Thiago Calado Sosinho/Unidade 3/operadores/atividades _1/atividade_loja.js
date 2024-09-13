let produtoValor = 500;
let desconto = 0.1;

let valorVista = produtoValor - (produtoValor * desconto);
let valorParcelaDuas = produtoValor / 2;
let valorParcelaTres = produtoValor / 3;



console.log ('====Valor produto: R$'+ produtoValor);
console.log('====Opção 1: A vista (com desconto de 10% R$ '+(produtoValor*desconto).toFixed(2)+'): R$'+valorVista.toFixed(2));
console.log('====Opção 2: A prazo: 2 parcelas de R$: '+valorParcelaDuas.toFixed(2)+' sem juros.');
console.log('====Opção 2: A prazo: 3 parcelas de R$: '+valorParcelaTres.toFixed(2)+' sem juros.');