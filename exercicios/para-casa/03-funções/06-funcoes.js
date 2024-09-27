/*
  Crie um programa que usa uma função que retorna outra que calcula a circunferência do circulo
  A fórmula é ==> C = πd (circunferência = PI * diâmetro)
  Ex: node .\02-funcoes.js 10
  printar 31.4
*/

//Não se preocupe com essas três linhas, vamos aprender semana que vem.
const myArgs = process.argv.slice(2);
const myArgs1 = parseFloat(myArgs[0]);

const gerarFuncao = () => { // É obrigatório usar essa função com os parâmetros
  const PI = 3.14;

  return(diametro) => {
    const circunferencia = PI * diametro
    return circunferencia
  }

}

const calcularCircunferencia = gerarFuncao();
console.log(`\nA circurferência do círculo com diâmetro de ${myArgs1} é: ${calcularCircunferencia(myArgs1).toFixed(2)}\n`);
