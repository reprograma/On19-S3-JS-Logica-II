/*
  Crie um programa que recebe dois números como ARGUMENTOS e printe a média
  Ex: node .\02-funcoes.js 25 41
*/

//Não se preocupe com essas três linhas, vamos aprender semana que vem.
console.clear();

const myArgs = process.argv.slice(2);
const myArgs1 = myArgs[1];
const myArgs2 = myArgs[0];


const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});



const calcularMedia = (numero1, numero2) => {// É obrigatório usar essa função com os parâmetros
  readline.question('\nInforme o primeiro número\n', numero1 =>{
    readline.question('\nInforme o segundo número\n', numero2 =>{
     media = ((+numero1) + (+numero2))/2;
     console.log(`A média entre os números,` ,numero1, `e` ,numero2, `é:`, media);

     readline.close();
  });
 });
};


//console.log(`Os número informados foram:`, numero1,`e`, numero2, `e a média entre eles é:`, calcularMedia());
calcularMedia(myArgs1, myArgs2);

readline.on('close', () => {
  console.log('\nFIM');
  process.exit(0);
});
