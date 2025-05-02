const prompt = require('prompt-sync')();
// 1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
// utilizando uma estrutura de controle if.
let numero = Number(prompt("insira um número: "));
if (numero % 2 === 0){
    console.log("este número é par");
} else {
    console.log("este número é ímpar");
}