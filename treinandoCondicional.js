
let voceMaiorDeIdade = true

let voceTemTituloDeEleitor = true

let voceVaiVotarNulo = false;

if(voceMaiorDeIdade){
    console.log("Eu sou maior de idade")
    if(voceTemTituloDeEleitor){
        console.log("Tenho Titulo de Eleitor")
        if(voceVaiVotarNulo){
            console.log("Vou votar nulo")
        }else{
            console.log("Não Vou votar nulo")
        }
    }
    else{
        console.log("Não Tenho Titulo de Eleitor")
    }
}
else{
    console.log("Sou menor de idade")
}