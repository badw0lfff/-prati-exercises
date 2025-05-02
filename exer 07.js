const prompt = require('prompt-sync')();
// 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
// forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.
let applesBought = Number(prompt("insira a quantidade de maçãs compradas: "));
if (applesBought < 12){
    console.log(`${applesBought} maçãs custam R$${applesBought * 0.30}`);
} else {
    console.log(`${applesBought} maçãs custam R$${applesBought * 0.25}`);
}