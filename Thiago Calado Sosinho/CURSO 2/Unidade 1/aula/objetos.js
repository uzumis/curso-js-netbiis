const pessoa = {nome:'joao',
    idade:25,
    endereço: {
        logradouro: 'Rua ABC',
        numero: 1000
    },
    tecnologias: ['JavaScript', 'Java', 'HTML', 'CSS'],
    saudacao: function(){
        console.log('Olá, meu nome é '+ this.nome);
    }
}

console.log(pessoa);
console.log(pessoa.nome);
pessoa.nome = 'Pedro';
console.log(pessoa.nome);
console.log(pessoa.endereço.logradouro);
pessoal.saudacao;