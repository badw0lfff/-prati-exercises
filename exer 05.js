const prompt = require('prompt-sync')();
// 5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
// determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
// utilizando if-else.
let peso = Number(prompt("digite seu peso em (kg): "));
let altura = Number(prompt("digite sua altura (m): "));
let imc = peso / (altura ** 2)
if (imc <= 19){
    console.log ("baixo peso");
} else if (imc <= 25){
    console.log ("peso normal");
} else if (imc <= 30){
    console.log("sobrepeso");
} else {
    console.log("obesidade");
}