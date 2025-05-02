const prompt = require('prompt-sync')();
// 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
// Utilize switch-case para implementar a lógica de cada opção selecionada.
let menuOption = prompt("escolha entre as opções 1, 2 ou 3: ");
switch (menuOption) {
    case "1":
        console.log("você escolheu a opção 1.");
        break;
    case "2":
        console.log("você escolheu a opção 2.");
        break;
    case "3":
        console.log("você escolheu a opção 3.");
        break;
    default:
        console.log("opção inválida.");
        break;
}