// 15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
// Fibonacci utilizando um loop for.
let num1 = 0;
let num2 = 1;
console.log("os 10 primeiros números da sequência Fibonacci são: ");

for (let i = 0; i < 10; i++){
    console.log(num1);
    let next = num1 + num2;
    num1 = num2;
    num2 = next;
}