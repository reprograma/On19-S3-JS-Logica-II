/*
  Sem criar novos ifs ou elses e sem alterar o valor das variáveis,
  corrija as condições para atingir o resultado desejado!
  Deverá resultar em 'Você acertou' no terminal
*/
console.clear(); //Irá limpar o terminal para você


//Ceda meia entrada para quem não for adulto
let adulto = false;
let valorEntrada = 10;
let valorMeiaEntrada;

if (adulto === false) { // mexa apenas aqui
  valorMeiaEntrada = valorEntrada / 2;
}

if (valorMeiaEntrada === 5) {
  console.log("\nVocê acertou!\n");
} else {
  console.log("\nTente de novo!\n");
}

/*
  Você consegue justificar sua resposta?
  Comente o código como foi a manipulação dos valores
  ex:
  if (estudo !== resposta) { //as variáveis devem ser diferentes para entrar no if
*/

