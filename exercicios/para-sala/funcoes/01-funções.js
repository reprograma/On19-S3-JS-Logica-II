console.clear();

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('\nChuta um número de um a dez!\n', (chute) => {
    adivinha(chute);
    readline.close();
  });

  const adivinha = (chute) => {
    if (+chute ===7) { //can also be used just ==7 to compare the input number as string 
      console.log("Parabéns! Você acertou");
    } else { 
      console.log("Tente novamente");   
    }
    console.log("Você chutou: ", chute)
   }
