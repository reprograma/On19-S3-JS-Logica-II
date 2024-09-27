/* Crie um programa que receba duas notas de um aluno, calcule a média e mostre se ele foi aprovado!

Se a nota for maior ou igual a 6, printar "Aprovado"
Se a nota for maior ou igual a 5, printar "Recuperação"
Se for menor que a nota de recuperação, printar "Reprovado"
*/

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('\nVamos ver se vc passou! Qual a primeira nota?\n', nota1 => {
  readline.question('\nQual a segunda nota?\n', nota2 => {

    const calculo = (parseInt(nota1) + parseInt(nota2)) / 2

    if(calculo >= 6){
      console.log('\nParabéns, você foi aprovado(a)!');
    } else if( calculo === 5){
      console.log('\nVocê está de recuperação, é hora de estudar!')
    } else {
      console.log('\nInfelizmente você foi reprovado(a) :(')
    }; 

    readline.close();
  });
});

readline.on('close', () => {
  console.log('\nEstude muito sempre!\n');
  process.exit(0);
});
