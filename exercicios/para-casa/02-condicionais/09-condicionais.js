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
    let media = (+nota1 + +nota2) / 2
    
    console.log('Primeira nota: ' + nota1, '\nSegunda nota: ' + nota2, '\nMédia: ' + media);
    console.log(media);
    if (media >= 6) {
      console.log("Aprovada, gata!")
    } else if (media >= 5) {
      console.log("Recuperação 🤕")
    } else {
      console.log("Reprovada 🤧")
    }
    readline.close();
  });
});

readline.on('close', () => {
  console.log('\nEstude muito sempre!');
  process.exit(0);
});
