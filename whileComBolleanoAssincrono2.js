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
        var promptInput = await readLineAsync("Digite 0 para finalizar ou oqualquer valor do menu >");
  
        console.log(
          "Você digitou: ",
          promptInput
        );
  
  
  
        switch (Number(promptInput)) {
          case 1:
            console.log("primeiro caso")
            break;
          case 2:
            console.log("segundo caso")
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