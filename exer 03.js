const prompt = require('prompt-sync')();
// 3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como
//"Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.
let nota = Number(prompt("insira sua nota de 0 a 10: "));
if (nota <= 3) {
    console.log("reprovado");
} else if (nota <= 6 ){
    console.log("recuperação");
} else {
    console.log("aprovado");
}