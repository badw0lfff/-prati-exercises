const prompt = require('prompt-sync')();
// 2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,
// adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
// controle if-else.
let idade = Number(prompt("forneça sua idade: "));
if (idade <= 12) {
    console.log("você é uma criança");
} else if (idade <= 19) {
    console.log("você é um adolescente");
} else if (idade <= 64) {
    console.log("você é um adulto");
} else {
    console.log("você é um idoso")
}