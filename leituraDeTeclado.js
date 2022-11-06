var readline = require("readline");

var leitor = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

leitor.question("Digite uma tecla: \n",(resposta_digitada) => {
    console.log(resposta_digitada);
    leitor.close();
})