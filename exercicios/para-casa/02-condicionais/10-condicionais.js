/*
  Crie um programa que irá receber um valor de produto:
  De desconto de 10% para produtos acima de 100 reais
  De desconto de 20% para produtos acima de 500 reais
  Imprima na tela qual foi o desconto e o valor final da compra
*/

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('\nQuanto é o valor a ser calculado?\n', valor => {
 if (+valor >= 100) { 
  console.log(`Your price, with a 10% discount of R$${valor*0.1}, is R$${valor - valor*0.1}.`)
 } else if (+valor >= 500) { 
  console.log(`Your price, with a 20% of R$${valor*0.2}, is RS${valor*0.2}.`)
 } else {
  console.log(`Your price, with no discount, is R$${valor}.`);}
  readline.close();
});

readline.on('close', () => {
  console.log('\nObrigada comprar com a gente!');
  process.exit(0);
});
