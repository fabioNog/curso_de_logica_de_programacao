// **************************************************************************************************************************

// EX: como eu faço pra saber se a minha soma é um valor par ou impar

// Todo valor numerico dividio por dois ao qual o resto da divisão seja 0 então este valor será par
// senão é impar

// variável soma é nosso dividento, 2 é o nosso divisor, a variável divisaoSoma e o resultado e a gente vai ter um resto %


// *************************************************************************************************************


//declarando duas variaveis que receberam valor inteiros
var n1 = 10
var n2 =  4

// n1 + n2  = ?

// nosso dividendo (Quem eu quero descobrir se é par ou impart)
var soma = n1 + n2;

// 14 / 2 o porcento me devolve o resto da divisao 

//resultado
let divisaoDaSoma = (soma / 2)


//exibe o valor da minha soma
console.log(divisaoDaSoma)

// captura o resto de uma divisão
let resto  = soma % 2;

//exibe o valor do resto
console.log(resto);

// condiciona ao qual dita que o resto tem que ser igual a zero
if(resto == 0){
    console.log("O valor " + soma + " é par ")
}
//caso contrario acontecerá um desvio condicional
else{
    console.log("É impar")
}

