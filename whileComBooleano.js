//let boolean = false;

var readline = require("readline");
resp = "";

var leitor = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const pegaLeitor = leitor.question(
  "Escolha uma oção do teclado, pode  ser 1 ou pode ser 2?\n",
  (answer) => {
    var resp = Number(answer);
    return resp;
    leitor.close();
  }
);

let pegaValor;

// function PegarValorDoTeclado(resp) {
//   pegaValor = resp;
//   return Number(pegaValor);
// }

console.log(pegaLeitor);

/*function SwitchCase(receberValor){

    if(receberValor != null){

         while(receberValor != 0){

            leitor.question("Escolha uma oção do teclado, pode  ser 1 ou pode ser 2?\n", function(answer) {

                var resp = Number(answer);
                PegarValorDoTeclado(resp)
        
                leitor.close();
            });

            switch(receberValor){
  
                case 1: 
                    console.log("primeiro caso")
                    LeituraDeTecladoSwitch();
                break;
                
                case 2: 
                    console.log("segundo caso");
                     LeituraDeTecladoSwitch();
                break;
                
                default: console.log("Nenhum valor foi selecionado"); LeituraDeTeclado();
            }
        
        }

    }

    else{
        console.log("qualquer coisa diferente de um valor recebido pelo teclado")
    }
}

LeituraDeTeclado();
*/

/* while(resp != 0){

    switch(resp){

        
        case 1: console.log("primeiro caso")
        break;
        
        case 2: console.log("segundo caso");
        break;

        
        
        default: console.log("Nenhum valor foi selecionado")
    }

} */
