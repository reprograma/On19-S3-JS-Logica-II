/*
  O usuário a idade (lembre que ele vem tudo como string) e se é ou não estudante;
  Imprima que ele tem direito a meia entrada se for menor de idade ou estudante.
  ex: "Legal, você tem direito a meia entrada" ou "Que pena, você não tem esse direito"
*/

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('\nQuando anos você tem?\n', idade => {
  readline.question('\nVocê é estudante? (Sim, Não)\n', estudante => {
   if (+idade <= 18 || estudante == "Sim") { //Created conditions for paying half-price 
    console.log(`Nice, you have the righ to pay half price.`);
   } else {
    console.log(`Sorry, you need to pay full price.`);
  }
    readline.close();
  });
});

readline.on('close', () => {
  console.log('\nBom filme!');
  process.exit(0);
});
