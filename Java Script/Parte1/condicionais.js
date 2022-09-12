console.log(`Trabalhando com condicionais`);

const listasDeDestinos = new Array(
    `Salvador`,
    `Pão Paulo`,
    `Rio de Janeiro`,
)

const idadeComprador = 18;
const estaAcompanhada = true;
const temPassagemComprada = true;

console.log("Destinos possíveis:");
//console.log(`${salvador} ${saoPaulo} ${rioDeJaneiro}`);
console.log(listasDeDestinos);

if (idadeComprador >= 16 ||
    estaAcompanhada == true
    ) {
    console.log("Venda permitida");
    listasDeDestinos.splice(1, 1); //removendo itém
} else{
    console.log("Menor acompanhado!");
    listasDeDestinos.splice(1, 1); //removendo itém

}

console.log("embarque: \n\n ")
if(idadeComprador >= 18 && temPassagemComprada){
    console.log("Boa viagem");
}else{
    console.log("Embarque não permitido!")
}

