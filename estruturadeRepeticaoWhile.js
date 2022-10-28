// exibir valores de 1 até 5
// incremento i + 1 = i 1 + 1 = 2 
// i++ <=> i = i + 1

//Primeira maneira -> for(let i = 0;i < 100 ; i++)

// let i = 0
// Segunda Opcao for(; i < 100 ; i++ )

// let i;
// Terceira Opcao for(i=0;i < 100 ;i = i +1 )

// let i = 0
//  Quarta Opcao for (; i < 100;){
    // incremento dentro do for i++ 
// }

/*let i = 1;
let contador = 0;
while(i < 5){
    contador = i + contador;   
    i++; // incremento
}*/



/* for(let i=1;i<5;){
    contador = contador + i;
    i = i + 1;
} */

let array = [1,2,3,4];

let palavra = "palavra";

let contador = 0; 

let boolean = true;


for(let i = 0; i < 4;i++){
    // 1 etapa 
    // i = 0
    // contador = 0 + array[0] = 0 + 1 -> contador = 1
        contador  = contador + array[i];
    // i++ => i = i + 1 = 0 + 1 = 1

    // 2 etapa 
    // i = 1
    // contador = 1 + array[1] = 1 + 2 -> contador = 3
    // i++ => i = i + 1 = 1 + 1 = 2

    // 3 etapa 
    // i = 2
    // contador = 3 + array[2] = 3 + 3 -> contador = 6
    // i++ => i = i + 1 = 2 + 1 = 3

    // 4 etapa 
    // i = 3
    // contador = 6 + array[3] = 6 + 4 -> contador = 10
    // i++ => i = 3 + 1 = 3 + 1 = 4
    
    
}


console.log(contador)
