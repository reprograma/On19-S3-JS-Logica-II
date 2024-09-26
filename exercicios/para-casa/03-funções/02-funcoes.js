/*
  Crie uma função que calcule quantos dias o usuário viveu, baseado na idade;
  A idade deve vir como o primeiro argumento do comando
  O nome deve vir em segundo
  ex: node .\02-funcoes.js 25 Joana
  OBS: considerar 365 dias por ano, não precisa checar anos bissextos
*/

//Não se preocupe com essas três linhas, vamos aprender semana que vem.
const myArgs = process.argv.slice(2);
const myArgs1 = myArgs[0]; // args 1 vira idade
const myArgs2 = myArgs[1]; // args 2 vira nome

const calcularDiasDeVida = (idade, nome) => { // É obrigatório usar essa função com os parâmetros
  console.log(`Você ${nome} já viveu ${(+idade * 365)} dias`); // o sinal do dinheiro serve para voce colocar textos para rodar junto com a resposta.
}

calcularDiasDeVida(myArgs1, myArgs2);

//quando for rodar sempre tem que seguir a ordem que os argumentos foram determinados, nesse caso, fica a idade em primeiro e
//o nome em segundo.