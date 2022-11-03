console.log("Eu existe antes do setTimeout")

while(true){
  // event loop 
  console.log(" estou aqui")
}
// setTimeout Função assincrona 
setTimeout(() => {
    console.log("Delayed for 3 second.");
  }, "3000") 
  // setTimeout espera por um evento até que ele finalize

  console.log("Eu existe depois do setTimeout")


  