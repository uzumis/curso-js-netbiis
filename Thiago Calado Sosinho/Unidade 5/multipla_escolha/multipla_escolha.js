function diaDaSemana(dia){
    switch (dia) {
        case 1:
            console.log('Segunda');
            break;
        case 2:
            console.log('Terca-feira');
            break;
        case 3:
            console.log('Quarta-feira');
            break;
        case 4:
            console.log('Quinta-feira');
            break;
        case 5:
            console.log('Sexta-feira');
            break;
        case 6:
            console.log('Sabado');
            break;
        case 7:
            console.log('Domingo');
            break;
        default:
            console.log('invalido');
    }
}

function diaDaSemanaString(dia) {
    switch (dia) {
        case 'Segunda':
            return 1;
        case 'Terca-feira':
            return 2;
        case 'Quarta-feira':
            return 3;
        case 'Quinta-feira':
            return 4;
        case 'Sexta-feira':
            return 5;
        case 'Sabado':
            return 6;
        case 'Domingo':
            return 7;
        default:
            console.log('invalido');
    }
}

diaDaSemana(3) //Quarta-feira;
console.log(diaDaSemanaString('Quarta-feira')) //3;