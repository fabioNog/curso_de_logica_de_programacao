class Retangulo {
    constructor(paramentro1, paramentro2){
        // atributos
        this.altura = paramentro2
        this.base = paramentro1;
    }

    //metodos
    get retornaBase(){
        return this.base;
    }

    get retornaAltura(){
        return this.altura;
    }
     
}

let array = [{
    base: 10,
    altura: 2,
},{
    base: 50,
    altura: 4
}]

array.forEach((elem,idex) => {
    let retangulo = new Retangulo(elem.base,elem.altura);
    let calculaArea = retangulo.retornaBase* retangulo.retornaAltura
    console.log("A area do meu retangulo é " + calculaArea);
})

// conceito objeto 

//let retangulo1 = new Retangulo(array[0].base,array[0].altura);


/*console.log("O valor da base eh " 
    + objetoRetangulo.retornaBase
    + " e a altura eh "
    + objetoRetangulo.retornaAltura); */

//let calculaArea = retangulo1.retornaAltura*retangulo1.retornaBase


//let calculaArea = objetoRetangulo.lado1*objetoRetangulo.lado2

/*console.log("O valor do base do Retangulo é  " + objetoRetangulo.lado1)
console.log("O valor do altura do Retangulo é  " + objetoRetangulo.lado2) */

//console.log("A area do meu retangulo é " + calculaArea);