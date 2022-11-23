
function pegaValor(){
    let input1 =  document.getElementById('input1');
    let input2 =  document.getElementById('input2');
    let input3 =  document.getElementById('input3');
    let input4 =  document.getElementById('input4');


    let celciusFirenheit = CelsiusFirenheit(input1.value)
    let firenheitCelcius = FirenheitCelsius(input3.value)
    console.log(firenheitCelcius);
    input2.value = celciusFirenheit;
    input4.value = firenheitCelcius;
    //console.log(input2)
}


function CelsiusFirenheit(params){
    const valorFarenheit = (params*1.8) + 32
    return valorFarenheit; 
}

function FirenheitCelsius(params){
    const valorCelcius = (params - 32) * (5/9)
    return valorCelcius;
  }

// let pegaValorDoEvent = input1.addEventListener('keypress',function(e){
//     let pegaValor = e.target.value;
//     return pegaValor;
// })

//console.log(pegaValorDoEvent)

//console.log(input1.value);