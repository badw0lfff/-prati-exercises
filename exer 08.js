const prompt = require('prompt-sync')();
// 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
// e escreve-los em ordem crescente.
let number1 = Number(prompt("insira o primeiro número: "));
let number2 = Number(prompt("insira o segundo número: "));

if (number1 < number2){
    console.log(number1, number2);
} else {
    console.log(number2, number1);
}