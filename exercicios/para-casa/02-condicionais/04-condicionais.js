/*
  O usuário irá chutar um número.
  Imprima uma mensagem legal quando ele acertar o número 7
  imprima que ele errou caso chutar qualquer outro número
*/

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('\nChuta um número de um a dez!\n', chute => {

  console.log(chute);
   if (+chute === 7) { //Chute variable had to be modified to number and then compared to number 7 to print desired message if they type 7 on terminal
    console.log(`Parabéns por escolher o número correto!`)
  } else {
    console.log(`Não foi dessa vez! Tente novamente.`) 
  }
  readline.close();
});

readline.on('close', () => {
 console.log('\nObrigada por jogar!');
  process.exit(0);
});
