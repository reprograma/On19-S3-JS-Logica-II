/*
  O usuário irá enviar 3 números, calcule a média deles (lembre que ele vem como string)
  Imprima a média
  ex: 2, 3, 4 ==> 3
*/

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('\nVamos calcular a média de 3 números, digite o primeiro:\n', n1 => {
  readline.question('\nSegundo número:\n', n2 => {
    readline.question('\nTerceiro número\n', n3 => {

      const media = (parseInt(n1) + parseInt(n2) + parseInt(n3)) / 3

      console.log(`\nA média dos números digitados é: ${media}`);

      readline.close();
    });
  });
});

readline.on('close', () => {
  console.log('\nObrigada por calcular!\n');
  process.exit(0);
});
