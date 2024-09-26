/*
  Crie uma função que chama ela mesma (recursiva) para somar N números
  o primeiro argumento é a quantidade de números M
  Ex: node .\05-funcoes.js 5
  1 + 2 + 3 + 4 + 5 = 15 (printar 15 no terminal)
*/

//Não se preocupe com essas três linhas, vamos aprender semana que vem.
const myArgs = process.argv.slice(2);
const myArgs1 = +myArgs[0];

function funcaoRecursiva(vezes, atual) { // É obrigatório usar essa função com os parâmetros
  if (atual < vezes) {
    atual++;
    console.log(atual)
    funcaoRecursiva(vezes, atual);
  } else {
    return atual;
    }
}

funcaoRecursiva(myArgs1, 0);

//as funções recursivas sao funções que chamam elas mesmas para fazer um loopin. ela cria pilhas de execução, ou seja, repetição.
// é muito raro usar essa função.