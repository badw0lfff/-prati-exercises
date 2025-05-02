const prompt = require('prompt-sync')();

// 14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
// utilizando um loop for ou while.
let number = Number(prompt("digite um número para calcular seu fatorial: "));
let fatorial = 1;
for (let i = 1; i <= number; i++){
    fatorial *= i;
}
console.log(`o fatorial de ${number} é ${fatorial}`);