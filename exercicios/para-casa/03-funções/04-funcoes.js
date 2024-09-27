/*
  Crie um programa que recebe dois números como ARGUMENTOS e printe a média
  Ex: node .\02-funcoes.js 25 41
*/

//Não se preocupe com essas três linhas, vamos aprender semana que vem.
const myArgs = process.argv.slice(2);
const myArgs1 = myArgs[0];
const myArgs2 = myArgs[1];

const calcularMedia = (numero1, numero2) => { // É obrigatório usar essa função com os parâmetros
  const media = (parseInt(numero1) + parseInt(numero2)) / 2
  console.log(`\nA média dos números digitados é: ${media}`);

}

calcularMedia(myArgs1, myArgs2);
