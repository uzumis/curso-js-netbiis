let arr = [1,2,3,4,5];

//TODOS OS PARAMETROS SÃO OPCIONAIS
arr.forEach(function(el, index, arr){
    console.log(el);
    console.log(index);
    arr[index] = el*2;
    console.log(arr);
})
