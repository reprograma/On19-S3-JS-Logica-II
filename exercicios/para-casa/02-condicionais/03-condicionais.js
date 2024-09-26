/*
  Sem criar novos ifs ou elses e sem alterar o valor das variáveis,
  corrija as condições para atingir o resultado desejado!
  Deverá resultar em 'Você acertou' no terminal
*/
console.clear(); //Irá limpar o terminal para você

let valorEntrada = 10;
let valorMeiaEntrada;

//Pessoa 1: é adulto, mas estudante, dê meia entrada
let adulto = true;
let estudante = true;
const condicional = () => estudante === adulto; // <=== mexa apenas aqui
if (condicional()) {
  valorMeiaEntrada = valorEntrada / 2;
} else {
  valorMeiaEntrada = valorEntrada;
}

if (valorMeiaEntrada === 5) {
  console.log("\nVocê acertou!\n");
} else {
  console.log("\nTente de novo!\n");
}

//Pessoa 2, é adulto, mas não é estudante, negar meia entrada
adulto = true;
estudante = false;
if (condicional()) {
  valorMeiaEntrada = valorEntrada / 2;
} else {
  valorMeiaEntrada = valorEntrada;
}

if (valorMeiaEntrada === 10) {
  console.log("\n%Você acertou!\n", "color: green");
} else {
  console.log("%cTente de novo!", "color: #000");
}

/*
  Você consegue justificar sua resposta?
  Comente o código como foi a manipulação dos valores
  ex:
  if (estudo !== resposta) { //as variáveis devem ser diferentes para entrar no if
*/

