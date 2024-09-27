/*
  O usuário enviar um número de 1 até 7
  Imprima qual dia da semana corresponde o número
  ex: 1 ==> domingo
*/

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('\nDiga o número de 1 a 7 e te direi o dia da semana!\n', dia => {

  if(dia === '1'){
    console.log('O dia 1 é um domingo.')
  } else if (dia === '2') {
    console.log('O dia 2 é uma segunda-feira.')
  } else if (dia === '3') {
    console.log('O dia 3 é uma terça-feira.')
  } else if (dia === '4') {
    console.log('O dia 4 é uma quarta-feira.')
  } else if (dia === '5') {
    console.log('O dia 5 é uma quinta-feira.')
  } else if (dia === '6') {
    console.log('O dia 6 é uma sexta-feira.')
  } else if (dia === '7') {
    console.log('O dia 7 é um sábado.')
  } else {
    console.log('Número inválido.');
  };

  readline.close();
});

readline.on('close', () => {
  console.log('\nObrigada por vir!\n');
  process.exit(0);
});
