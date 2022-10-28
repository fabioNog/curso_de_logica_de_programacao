let boolean = false;



    var readline = require('readline');
    var resp = "";


    var leitor = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    
    leitor.question("Escolha uma oção do teclado, pode  ser 1 ou pode ser 2?\n", function(answer) {
    
        var resp = Number(answer);
        PegarValorDoTeclado(resp)
    
         leitor.close();
    });



function PegarValorDoTeclado(receberValor){


         while(receberValor != 0){

            switch(receberValor){
  
                case 1: 
                    console.log("primeiro caso")
                    var readline = require('readline');
                    var resp = "";


                    var leitor = readline.createInterface({
                        input: process.stdin,
                        output: process.stdout
                    });
                    
                    leitor.question("Escolha uma oção do teclado, pode  ser 1 ou pode ser 2?\n", function(answer) {
                    
                        var resp = Number(answer);
                        receberValor = resp
                    
                        leitor.close();
                    });
                break;
                
                case 2: 
                    console.log("segundo caso");
                    var readline = require('readline');
                    var resp = "";


                    var leitor = readline.createInterface({
                        input: process.stdin,
                        output: process.stdout
                    });

                    leitor.question("Escolha uma oção do teclado, pode  ser 1 ou pode ser 2?\n", function(answer) {

                        var resp = Number(answer);
                        receberValor = resp

                        leitor.close();
                    });
                break;
                
                default: 
                    console.log("Nenhum valor foi selecionado"); 
                    var readline = require('readline');
                        var resp = "";


                        var leitor = readline.createInterface({
                            input: process.stdin,
                            output: process.stdout
                        });
                        
                        leitor.question("Escolha uma oção do teclado, pode  ser 1 ou pode ser 2?\n", function(answer) {
                        
                            var resp = Number(answer);
                            receberValor = resp
                        
                            leitor.close();
                        });
            }

            

    }

}



/* while(resp != 0){

    switch(resp){

        
        case 1: console.log("primeiro caso")
        break;
        
        case 2: console.log("segundo caso");
        break;

        
        
        default: console.log("Nenhum valor foi selecionado")
    }

} */