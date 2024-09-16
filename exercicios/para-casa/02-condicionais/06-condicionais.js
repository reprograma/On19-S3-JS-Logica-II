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
if (+numero % 2 == 0) { //By dividing it by 2 and remaining 0, we know it's an even number
  console.log(`This number, ${numero}, is even.`);
} else {
  console.log(`Your number, ${numero}, is odd.)`)
}
  readline.close();
});

readline.on('close', () => {
  console.log('\nObrigada por jogar!');
  process.exit(0);
});
