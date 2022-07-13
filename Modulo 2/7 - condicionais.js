console.log(`Trabalhando com Listas`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 17;
const acompanhado = true;
const passagemComprada = true;

if (idadeComprador >= 18 || acompanhado) {
    console.log("Comprador Válido");
    console.log("Destinos possiveis: ");
    console.log(listaDeDestinos);
} else {
    console.log("O comprador não é maior de idade");
}

console.log("Embrque: \n\n");

if(idadeComprador >= 18 && passagemComprada){
    console.log("Boa Viagem!");
}else{
    console.log("Você não pode embarcar");
}