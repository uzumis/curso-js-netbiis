export class Calculadora{

    static somar(a,b){
        return a+b;
    }
    static subtrair(a,b){
        return a-b;
    }
    static multi(a,b){
        return a*b;
    }
    static div(a,b){
        return a/b;
    }
}

export class CalcCient extends Calculadora {
    static potencia(a,b){
        return Math.pow(a,b);
    }
}


export default Calculadora;