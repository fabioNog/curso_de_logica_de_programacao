const { promisify } = require("util");
const readline = require("readline");

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question[promisify.custom] = (question) => {
  return new Promise((resolve) => {
    rl.question(question, resolve);
  });
};

rl.questionSync = promisify(rl.question);

(async () => {
  let run = true;
  while (run) {
    let promptInput = await rl.questionSync(
      "Node e React são as Stack Perfeita? - [ 1 => Sim | 2 => Não ]\n"
    );

    switch (Number(promptInput)) {
      case 1:
        console.log("Resposta certa!!!");
        run = false;
        rl.close();
        break;
      default:
        console.log("Resposta inválida!!!");
    }
  }
})();