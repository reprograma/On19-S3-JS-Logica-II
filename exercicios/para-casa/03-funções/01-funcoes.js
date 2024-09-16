/*
  Crie um programa que recebe dois números como ARGUMENTOS e printe a média
  Ex: node .\02-funcoes.js 25 41
*/

//Não se preocupe com essas três linhas, vamos aprender semana que vem.
const myArgs = process.argv.slice(2);
const myArgs1 = myArgs[0];
const myArgs2 = myArgs[1];

const calcularMedia = (numero1, numero2) => { // É obrigatório usar essa função com os parâmetros
  console.log((+numero1 + +numero2)/2); //Variables could receive any input, like strings, which is why they need to be set to modify it to numbers with +
}

calcularMedia(myArgs1, myArgs2);

/*Also thought about doing it with   
const media = (numero1 + numero2) and printing media/2


OR   const media = (numero1 + numero2) / 2 */