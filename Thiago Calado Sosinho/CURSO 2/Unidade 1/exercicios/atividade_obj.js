let pessoa = {nome: prompt('Seu nome'),
    idade:prompt('Sua idade'),
    tecnologias: prompt('Sua especialidade')
}

addEventListener("DOMContentLoaded", (event) => {
    let doc = document.getElementById('teste');
    doc.innerHTML= pessoa.nome;

});

console.log(pessoa);