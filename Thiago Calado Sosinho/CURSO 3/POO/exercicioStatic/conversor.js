class Conversor {


    static metrosParaQuilometros(metro){
        return metro/1000;
    }

    static quilometrosParaMetros(quilometro){
        return quilometro*1000;
    }
    
}

console.log (Conversor.metrosParaQuilometros(2000));
console.log (Conversor.quilometrosParaMetros(2));