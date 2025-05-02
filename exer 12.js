const prompt = require('prompt-sync')();

// 12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário
// (de 1 a 10) utilizando um loop for.
let num = Number(prompt("insira número para gerar a tabuada: "))
for (i = 1; i <= 10; i++){
    console.log(`${num} x ${i} = ${num * i}`)
    }
