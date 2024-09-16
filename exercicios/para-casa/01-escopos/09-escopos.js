/*
  Não altere nada no código, apenas adicione um valor a variável 'resposta'!
  Execute o código e veja se acertou no terminal
  ex: const resposta = 5;
*/
console.clear(); //Irá limpar o terminal para você
const resposta = 35; //insira o valor da final variável 'estudo' aqui
let estudo = 10;
const multiplicador = 2;

if (estudo === 10) { 
  estudo = 20; //Because estudo was 10, it has now been redefined to 20
  if (estudo === 20) { 
    estudo = 35; //Because estudo was then 20, now it's set to 35
  } else {
    estudo = 14;
  }
}

if (estudo === resposta) {
  console.log("\nVocê acertou!\n");
} else {
  console.log("\nTente de novo!\n");
}

/*
  Você consegue justificar sua resposta?
  Comente o código como foi a manipulação dos valores
  ex:
  let estudo = 1 //aqui foi feita a atribuição no escopo global
*/
