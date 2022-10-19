// Sintaxe 


// var na linguam de programção 
// o interprator consegue saber que é alocação de memoria alocou o endereçe desta memoria 

// ele entende que depois da alocação vem o nome da variavel quqlquer_cois, n1 , que eu irei salvar 

// se esta pessoa digitar um ; então eu aloco um lixo de memoria 
// se não, se eu interpretardor receber um valor igual 
// eu preparo uma exeção de igualdade  ele espera um espaço e alguma outra informação 
// quais são elas , um valor inteiro, reconhece uma string, 
//desde que esta string esteja inserida dentro de aspas duplas, ou aspas simples   
// valore booleanos e espera um ; senão o interpretador me mostra um erro


// Operações logicas 

// sequencia de operadores 
// operador de >  && ()    *   

// (3 > 1) é uma premissa verdadeira p1
// (4 > 5) é uma premissa falsa  p2
  
// operação logica p1 && p2 v ou falso dependendo das minhas premissas// Prioridade das operações

// dentro de um contexto primeiro eu interpretador olha para os parenteses e resolve o que esta lá dentro
// e depois ele resolve o que esta fora desta parentes
// p1(V) && p2(F) = F 
// tudo que esta dentro do if vai resultar em verdadeiro ou falso  (3 >  1) && (4 > 5) if(F)
//{se o valor dentro do if for falso então eu não executo o que esta dentro do if}
var n1 = 10
var n2 =  4

// n1 + n2  = ?

// nosso dividendo (Quem eu quero descobrir se é par ou impart)
var soma = n1 + n2;


// como eu faço pra saber se a minha soma é um valor par ou impar

// Todo valor numerico dividio por dois ao qual o resto da divisão seja 0 então este valor será par
// senão é impar

// soma é nosso dividento, 2 é o nosso divisor o divisaoSoma é o resultado e a gente vai ter um resto % 



// 14 / 2 o porcento me devolve o resto da divisao 

//resultado
let divisaoDaSoma = (soma / 2)

console.log(divisaoDaSoma)


let resto  = soma % 2;

console.log(resto);


if(resto == 0){
    console.log("O valor " + soma + " é par ")
}
else{
    console.log("É impar")
}



/*if(F){
    console.log("Você escreveu algo que é verdadeiro para mim interpretador")
}
else{
    // Dsvio condicional 
    // Se não executar o que esta dentro do if obrigatoriamente eu executo o que esta dentro do else

    console.log("Estou executando um desvio condicional ")
}*/

// var let e const


  

// Com a Tabela verdade seremos capazes de dizer se operações logicas nos daram respostava validas ou invalidas
// e estas operações são feitas com premissas  um exemplo de premissa 10 é menor que 20 
//  raiz quadradada de 4 é 2 é outra premissa 


// Introdução a logica // Matematico chamado 
// operações logicas  e construimos estas validações
// um tipo de validação se a primissa 10 é menor que 20 E 4 é raiz de quadrada de 2 então isto é v 
// se uma premissa for verdadeira e a outra premissa também for verdade então minha resposta para isto é verdadeiro 
// console.log(nu > numero2);