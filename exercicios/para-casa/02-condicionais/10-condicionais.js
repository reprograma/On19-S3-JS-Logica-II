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
  
  const number = parseInt(valor);

  if(number >= 100 && number <= 499) {
    const desconto10 = number - (number * 10 / 100 );
    console.log(`\nO valor final com desconto de 10% é: R$${desconto10}`);
  } else if (number >= 500){
    const desconto20 = number - (number * 20/100);
    console.log(`\nO valor final com desconto de 20% é: R$${desconto20}`);
  } else {
    console.log('\nInfelizmente produtos com valor inferior a R$100 não possuem desconto.')
  }

  readline.close();
});

readline.on('close', () => {
  console.log('\nObrigada comprar com a gente!\n');
  process.exit(0);
});
