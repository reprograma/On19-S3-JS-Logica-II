console.clear();

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline
   .question('\nChuta um número de um a dez!\n', (chute1) => {
    readline
      .question('\nChuta outro número de um a dez!\n', (chute2) => {
          adivinha(chute1, chute2);
    readline.close();
  })})

  const adivinha = (chute1, chute2) => {
    if (+chute1 ===7 && +chute2 === 7) { //can also be used just ==7 to compare the input number as string 
      console.log("Parabéns! Você acertou");
    } else { 
      console.log("Tente novamente");   
    }
    console.log("Você chutou: ", chute1, chute2)
   }
