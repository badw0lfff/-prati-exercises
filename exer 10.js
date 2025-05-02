const prompt = require('prompt-sync')();
// 10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.
let number = Number(prompt("insira um número inteiro: "));
for (let counter = 0; counter < 10; counter++){
    console.log(number);
}