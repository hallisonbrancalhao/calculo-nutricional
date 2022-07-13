console.log(`\nTrabalhando com Listas`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 17;
const acompanhado = true;
let passagemComprada = false;
const destino = `Salvador`;

if (idadeComprador >= 18 || acompanhado) {
    console.log("Comprador Válido");
    console.log("Destinos possiveis: ");
    console.log(listaDeDestinos);
    passagemComprada = true;
} else {
    console.log("\O comprador não é maior de idade");
}

console.log("Embarque: \n\n");

if (passagemComprada) {
    console.log("Boa Viagem!\n");
} else {
    console.log("Você não pode embarcar\n");
}

let contador = 0;
let destinoExiste = false;

while (contador < 3) {
    if (listaDeDestinos[contador] == destino) {
        destinoExiste = true;
        console.log("\nDestino encontrado!");
        break;
    }
    contador++;
}

if (destinoExiste && passagemComprada) {
    console.log("Boa viagem!!");
} else {
    console.log("Falha no sistema");
}

for (let cont = 0 ; cont < 3 ; cont++) {
    if (listaDeDestinos[cont] == destino) {
        destinoExiste = true;
        console.log("\nDestino encontrado!");
        break;
    }
    contador++;
}

