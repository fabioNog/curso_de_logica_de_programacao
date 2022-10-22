
 

//javascript é case sensitive - ele difere letras maisculas de letras minuscula
// declarando nome de funcao (primeira letra é maiscula), 
// Não posso começar com numeros e de preferencia com outros simbolos
// # & * % 
// Se for declarar com palavras compostas escrevo desta forma: 
// a primeira Palavra com letra maiscula e uno com a segunda Palavra tmb maiscula
// ex SomaDeNumerosPar esta uma forma correta somaPar Soma_Par soma_par
// aqui eu declarei um variavel num do tipo numerica 
let num = 10

// declarei uma segunda variavel chamada de restoDeUmaDivisao é atribui a ela o resto de uma divisao
let restoDeUmaDivisao = num % 2 // ele é resto de 10 / 2 

// o simbolo % é o resto de uma divisão 
// porcentagem por cento,, valor dividido por 100 



// por default o javascript coloca este param como o valor 1 ou v param 
function EhParOuImpar(param){

    if(param > 0){
        return " O numero " + num + " é par" 
    }
    else{
        return "É impar"
    }
}

// se eu não colar nada dentro da funcao ela insere o valor 1

// neste momento o meu javascript chama minha funcao criada la em cima e sobrescreve o param 
// agora o param vale exatente o valor da variavel restoDeUmaDivisao sobrescrita
console.log(EhParOuImpar(restoDeUmaDivisao));
