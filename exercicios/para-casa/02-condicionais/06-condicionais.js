/*
  O usuário enviar um número qualquer (lembre que ele vem como string)
  Imprima se o número é impar ou par
  ex: 1 ==> impar
*/

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('\nDiga o número e te direi se é impar ou par!\n', numero => {
  formatandoNumero = parseInt(numero);
  if (numero % 2 === 0){
    console.log('Esse é um número par.')
  } else {
    console.log('Esse é um número impar.')
  }

  readline.close();
});

readline.on('close', () => {
  console.log('\nObrigada por jogar!\n');
  process.exit(0);
});
