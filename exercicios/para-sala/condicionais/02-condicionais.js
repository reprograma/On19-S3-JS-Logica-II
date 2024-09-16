// Maior de 18 = inteira
// Menores de 18 ou maiores de 65 = meia entrada
// Com cupom, ganha pipoca

console.clear ();
const idade = 77;
const temCupom = true;
/* You can combine conditions in a new variable, like
const idadeInteira = idade > 18 && idade < 65 */

if (idade > 18 && idade < 65) {
    console.log("Pagar entrada inteira");
} else if (idade === 18) {
    console.log("Pagar 7/8 entrada");
} else {
  console.log("Pagar meia");
}

if (temCupom) {
    console.log("Ganhou pipoca");
}

console.log("Final");