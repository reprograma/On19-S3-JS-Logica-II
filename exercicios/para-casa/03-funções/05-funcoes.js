/*
  Crie uma função que chama ela mesma (recursiva) para somar N números
  o primeiro argumento é a quantidade de números M
  Ex: node .\05-funcoes.js 5
  1 + 2 + 3 + 4 + 5 = 15 (printar 15 no terminal)
*/

//Não se preocupe com essas três linhas, vamos aprender semana que vem.
//const myArgs = process.argv.slice(2);
//const myArgs1 = myArgs[0];

const funcaoRecursiva = (numero1) => { // É obrigatório usar essa função com os parâmetros
  console.log(numero1);
  if(numero1 <= 1)
    return numero1
  return numero1 + funcaoRecursiva(numero1 - 1)
}

console.log(funcaoRecursiva(5))

//funcaoRecursiva(myArgs1);
