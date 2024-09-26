/*
  Não altere nada no código, apenas adicione um valor a variável 'resposta'!
  Execute o código e veja se acertou no terminal
  ex: const resposta = 5;
*/
console.clear(); //Irá limpar o terminal para você
const resposta = 20; //insira o valor da final variável 'estudo' aqui
let estudo = 10;
const multiplicador = 2;

const clojure = () => {
  estudo = 20; //aqui foi feita a atribuição no escopo global --> aqui vc redefine o valor, já que a variavel já foi criada.
  return () => {
    let estudo = 25;
  }
}

const funcaoDaFuncao = clojure();
funcaoDaFuncao();

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

