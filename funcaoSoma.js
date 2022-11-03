
const num1 = 5 
const num2 = 6

// esta funcao não retorna nada 
function Soma(param1,param2){
    const somaparametros = param1 + param2;
    return somaparametros
}


// esta funcao retorna um numero
function SomaDoisNumeros(){
    let num1 = 2;
    let num2 = 3;
    return num1 + num2
}

console.log(SomaDoisNumeros());

console.log(Soma(num2,num2))