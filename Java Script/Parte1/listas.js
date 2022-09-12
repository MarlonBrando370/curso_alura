console.log(`Trabalhando com listas`);
// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

const listasDeDestinos =new Array(
    `Salvador`,
    `Pão Paulo`,
    `Rio de Janeiro`,
)
listasDeDestinos.push(`Curitiba`);

console.log("Destinos possíveis:");
//console.log(`${salvador} ${saoPaulo} ${rioDeJaneiro}`);
listasDeDestinos.splice(1,1);
console.log(listasDeDestinos);
console.log(listasDeDestinos[1], listasDeDestinos[0]);