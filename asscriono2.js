//const array = [1,2,3,4,5,6,7,8,9,0];

//console.log(array);

//palavras reservadas = let const var, function , console, alert 

let response = "aula de javascript";

let numerica = 10

//console.log(response)
//console.log(numerica);

let num1 = 16
let num2 = 16

if(num1 <= num2){
    console.log("verdadeiro")
}
else{
    console.log("falso")
}

// Funcao sem parametro
/*function ExibirConsoleLog(){
    console.log("estou exibindo a minha funcao")
}*/

// arrow function sem parametro 
// () => {} 

/* const ExibirConsoleLog = () => {
    console.log("estou exibindo a minha funcao")
}*/

// Funcao com parametros 
function ExibirConsoleLog(parametro1){
    console.log("exibindo o meu parametro")
    console.log(parametro1)
}

ExibirConsoleLog("Ola eu sou um paramentro do tipo string");


ExibirConsoleLog(70);


 





/* async function FuncaoDeRetornoAssincrono() { 
    const esperaOSetTimeOut = setTimeout(() => {
        console.log("Delayed for 3 second.");
      }, "3000") 
    let response = await Promise.all(esperaOSetTimeOut);
}

FuncaoDeRetornoAssincrono();*/

