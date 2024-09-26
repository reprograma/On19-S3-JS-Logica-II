/*
  Crie um programa que recebe dois números como ARGUMENTOS e printe a média
  Ex: node .\02-funcoes.js 25 41
*/

//Não se preocupe com essas três linhas, vamos aprender semana que vem.
const myArgs = process.argv.slice(2); //esse process.argv é quando vai gerar uma lista, ele vai calcular a partir da lsita que vc quer. e o Slice é para cortar os primeiros argumentos que não sao necessarios, porque é como se fosse o contexto.
const myArgs1 = myArgs[0]; //esse seria o primeiro argumento (que seria o primeiro número para gerar a média)
const myArgs2 = myArgs[1]; //esse seria o segundo argumento (que seria o segundo número para gerar a média)

const calcularMedia = (numero1, numero2) => { // É obrigatório usar essa função com os parâmetros
  const num1Convert = Number.parseFloat(numero1); // o parseFloat é para números com virgulas;
  const num2Convert = Number.parseInt(numero2); // o parseInt é para números inteiros. voce pode usar so o Number se quiser que dá no mesmo objetivo, que é a conversão.
  
  console.log((num1Convert + num2Convert) / 2); // o sinal de + já converte automaticamente, sem precisar fazer o const num1convert.
}

calcularMedia(myArgs1, myArgs2);

//nesses casos, quando for rodar no terminal tem que colocar os números que voce quer a media junto com o nome do documento.