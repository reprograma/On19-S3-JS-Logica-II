/* Crie um programa que receba duas notas de um aluno, calcule a média e mostre se ele foi aprovado!

Se a nota for maior ou igual a 6, printar "Aprovado"
Se a nota for maior ou igual a 5, printar "Recuperação"
Se for menor que a nota de recuperação, printar "Reprovado"
*/

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

//This one just needs a variable to track the average of the results and conditions based on the value
readline.question('\nVamos ver se vc passou! Qual a primeira nota?\n', nota1 => {
  readline.question('\nQual a segunda nota?\n', nota2 => {
  const mean = (+nota1 + +nota2) / 2;
    if (mean >= 6) {
    console.log(`Congratulations! You have been approved.`);
  } else if (mean >= 5) {
    console.log(`Almost! You should try your best on the exam.`);
  } else { 
    console.log(`Oh bummer! You didn't manage this time, try again next year.`)
  }
    readline.close();
  });
});

readline.on('close', () => {
  console.log('\nEstude muito sempre!');
  process.exit(0);
});
