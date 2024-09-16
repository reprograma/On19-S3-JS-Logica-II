/*
  Crie uma função que calcule quantos dias o usuário viveu, baseado na idade;
  A idade deve vir como o primeiro argumento do comando
  O nome deve vir em segundo
  ex: node .\02-funcoes.js 25 Joana
  OBS: considerar 365 dias por ano, não precisa checar anos bissextos
*/

//Não se preocupe com essas três linhas, vamos aprender semana que vem.
const myArgs = process.argv.slice(2);
const myArgs1 = myArgs[0];
const myArgs2 = myArgs[1];

const calcularDiasDeVida = (idade, nome) => { // É obrigatório usar essa função com os parâmetros
  const daysLived = idade * 365
  console.log(`${nome} viveu ${daysLived} dias.`);
}

calcularDiasDeVida(myArgs1, myArgs2);
