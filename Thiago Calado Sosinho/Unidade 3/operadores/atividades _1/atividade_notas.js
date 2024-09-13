let notas = {
    n1: prompt('Digite a nota 1'),
    n2: prompt('Digite a nota 2'),
    n3: prompt('Digite a nota 3'),
    n4: prompt('Digite a nota 4')
}

let mediaNota = (notas.n1 + notas.n2 + notas.n3 + notas.n4)/Object.keys(notas).length;
console.log (mediaNota);