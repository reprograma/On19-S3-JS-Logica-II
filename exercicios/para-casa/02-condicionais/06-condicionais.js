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
  advNumero (numero)
  //console.log(numero);

  readline.close();
});

readline.on('close', () => {
  console.log('\nObrigada por jogar!');
  process.exit(0);
});

const advNumero = (numero) => { 
  if (+numero %2 === 0){
    console.log('Esse número é par')
  }else {
    console.log('Esse número é impar')
  }
}