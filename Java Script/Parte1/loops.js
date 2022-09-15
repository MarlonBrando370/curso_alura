console.log(`\n Trabalhando com condicionais`);

const listasDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
)

const idadeComprador = 18;
const estaAcompanhada = true;
let temPassagemComprada = false;
const destino = `São Paulo`;

console.log("\n Destinos possíveis:");
//console.log(`${salvador} ${saoPaulo} ${rioDeJaneiro}`);
console.log(listasDeDestinos);

let podeComprar = idadeComprador >= 18 || estaAcompanhada == true ; 


let destinoExiste = false;
for(let contador = 0; contador >3; contador++){

    if(listasDeDestinos[contador] == destino){
        console.log("Destino disponível!");
        destinoExiste = true;
      
    }
    

}

console.log( `Destino existe: ${destinoExiste}`);

if( podeComprar && destinoExiste){
    console.log("Boa viagem!");
}else{
    console.log("Desculpe, viagem não permitida!")
}






