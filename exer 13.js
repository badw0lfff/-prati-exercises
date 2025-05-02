const prompt = require('prompt-sync')();

// 13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
// a média aritmética desses números.
let soma = 0;
let quantidade = 0;
let numero;

do {
  numero = Number(prompt("digite um número decimal (0 para parar): "));
  if (numero !== 0) {
    soma += numero;
    quantidade++;
  }
} while (numero !== 0);

if (quantidade > 0) {
  let media = soma / quantidade;
  console.log("a média aritmética é: " + media.toFixed(2));
} else {
  console.log("nenhum número foi digitado.");
}