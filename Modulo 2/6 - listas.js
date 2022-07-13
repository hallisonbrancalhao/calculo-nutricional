console.log(`Trabalhando com Listas`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

console.log(listaDeDestinos);

listaDeDestinos.push(`Curitiba`); //Adicionando um item
listaDeDestinos.splice(1,1);

console.log(listaDeDestinos);
console.log(listaDeDestinos[1]);