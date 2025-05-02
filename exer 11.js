const prompt = require('prompt-sync')();

//11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total
// utilizando um loop for.
let number1 = Number(prompt("insira o primeiro número: "));
let number2 = Number(prompt("insira o segundo número: "));
let number3 = Number(prompt("insira o terceiro número: "));
let number4 = Number(prompt("insira o quarto número: "));
let number5 = Number(prompt("insira o quinto número: "));
let soma = 0
for (i = 1; i <= 5; i++){
    soma += number1, number2, number3, number4, number5
}
console.log("o total é: ", soma);