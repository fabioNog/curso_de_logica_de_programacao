var readline = require("readline");

var leitor = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
// o question espera dois paramentros um é uma string e outro é um funcao
// leitor.question(recebe uma string que sera exibida no terminal, function(){})
// functionu UmafuncaoQualqer() {} ou // (arrow function)         () => {}
// parametro para minha funcao function umafuncao com parametro
// function(param){} // (param) => {} 
  




var valorEmGrausCelcius = 90

var valorEmFirenheit = 44

// Criar uma função que converta Celsius em Firenheit
function ConverteTemperaturaCelsiusFirenheit(){
    const valorFarenheit = (valorEmGrausCelcius*1.8) + 32
    return valorFarenheit; 
}

// Criar uma função que converta  Firenheit em Celsius
//(32 °F − 32) × 5/9
function ConverteTemperaturaFirenheitCelsius(){
    const valorCelcius = (valorEmFirenheit - 32) * (5/9)
    return valorCelcius;
}

function PegaValor(valorTeclado){
    return valorTeclado;
}


function Menu(){

    console.log("*********************************************")
    console.log(" - Digite 1 para converter Celsius em Firenheit") 
    console.log(" - Digite 2 para converter Firenheit em Celsius")
    console.log("*********************************************")

   const pegaValorDentroDoMenu =  leitor.question(
        "Escolha uma oção do teclado, pode  ser 1 ou pode ser 2?\n",
        function(answer){
          var resp = Number(answer);
          //PegaValor(resp);
          leitor.close();
        }
    ); 
    
    console.log(pegaValorDentroDoMenu);
        

    
    /*switch(valor){
        case 1: // converter Celsius em Firenheit
        break
        case 2: // Firenheit em Celsius
        break
        default: // qualquer coisa
    
    } */
}

Menu();



