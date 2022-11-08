(async () => {
    const readline = require("readline");
    let run = true;
    while (run) {
      const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
      });
  
      function readLineAsync(message) {
        return new Promise((resolve, reject) => {
          rl.question(message, (answer) => {
            resolve(answer);
          });
        });
      }
  
      // Leverages Node.js' awesome async/await functionality
      async function demoSynchronousPrompt() {
        var promptInput = await readLineAsync("Digite 0 para finalizar \n- 1 para calcular grau Celcius em Firenheit. \n- 2 para calcular Firenheit para Celcius \n ou oqualquer valor do menu >");
  
        console.log(
          "Você digitou: ",
          promptInput
        );

        // Criar uma função que converta Celsius em Firenheit
        function ConverteTemperaturaCelsiusFirenheit(params){
          const valorFarenheit = (params*1.8) + 32
          return valorFarenheit; 
        }

        // Criar uma função que converta  Firenheit em Celsius
        //(32 °F − 32) × 5/9
        function ConverteTemperaturaFirenheitCelsius(naoimportaonome){
          const valorCelcius = (naoimportaonome - 32) * (5/9)
          return valorCelcius;
        }
  
        
  
        switch (Number(promptInput)) {
          case 1:
            console.log("primeiro caso")
            let valorCelcius = await readLineAsync("Digite o valor a ser convertido de grau Celsius para Firenheit >");
            let pegaValorConvertidoCelciusFirenheit = ConverteTemperaturaCelsiusFirenheit(Number(valorCelcius));
            console.log(pegaValorConvertidoCelciusFirenheit);
            break;
          case 2:
            console.log("segundo caso")
            let valorFirenheit = await readLineAsync("Digite o valor a ser convertido de grau Firenheit para Celsius  >");
            let valorFirenheitNumerico = Number(valorFirenheit)
            let pegaValorConvertidoFirenheitCelcius = ConverteTemperaturaFirenheitCelsius(valorFirenheitNumerico)
            console.log(pegaValorConvertidoFirenheitCelcius);
            break;
          case 0:
            run = false;
            console.log("Adios NODE!");
            break;
          default:
            console.log("Nenhum valor foi selecionado");
        }
  
        rl.close();
      }
  
      await demoSynchronousPrompt();
    }
  })();