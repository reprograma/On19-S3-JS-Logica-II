/*
  O usuário irá chutar um número.
  Imprima uma mensagem legal quando ele acertar o número 7
  imprima que ele errou caso chutar qualquer outro número
*/

const adivinha = (chute) => {
  if(chute == 7) {
      console.log("Eba! Você acertou.");
  } else {
      console.log("Você errou, tente mais uma vez.")
  }

}
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('\nChuta um número de um a dez!\n', chute => {
  adivinha(chute);
  //console.log(chute);
  readline.close();
});

readline.on('close', () => {
  console.log('\nObrigada por jogar!');
  process.exit(0);
});
