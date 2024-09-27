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

    if(parseInt(idade) <= 17 || estudante === 'Sim'){
      console.log('Legal, você tem direito a meia entrada');
    } else {
      console.log('Que pena, você não tem direito a meia entrada');
    };

    readline.close();
  });
});

readline.on('close', () => {
  console.log('\nBom filme!\n');
  process.exit(0);
});
