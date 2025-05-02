const prompt = require('prompt-sync')();
// 6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
// formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
// Isósceles, escaleno ou eqüilátero.
// Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
// Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
// Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
// Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)

let ladoA = Number(prompt("insira valor do lado A: "));
let ladoB = Number(prompt("insira valor do lado B: "));
let ladoC = Number(prompt("insira valor do lado C: "));
let triangle = (ladoA < ladoB + ladoC) && (ladoB < ladoA + ladoC) && (ladoC < ladoA + ladoB);

if (triangle){
    console.log("é um triângulo:");
    if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
        console.log("isóceles");
    } else if (ladoA !== ladoB && ladoB !== ladoC) {
        console.log("escaleno");
    } else {
        console.log("equilátero")
    }
} else {
    console.log("lados fornecidos não formam um triângulo")
}