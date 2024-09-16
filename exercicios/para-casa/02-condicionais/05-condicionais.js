/*
  O usuário enviar um número de 1 até 7
  Imprima qual dia da semana corresponde o número
  ex: 1 ==> domingo
*/

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

//Created a variable with array options for names of weekdays, which are called with the number from user's input
readline.question('\nDiga o número de 1 a sete e te direi o dia da semana!\n', dia => {
  const week = ["Choose a valid number.", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  if (+dia <= 0) {
    console.log(week[0])
  } else if (+dia == 6) {
    console.log(`Sextou! Sexta-fire!!! 🔥`)
  } else if (dia >= 1 && dia <= 7 ) {
  console.log(`Hoje é ${week[dia]}.`);
  } else { 
    console.log(`You know a week only has 7 days, right?`)
  }
  readline.close();
});

readline.on('close', () => {
  console.log('\nObrigada por vir!');
  process.exit(0);
});
