/*
  Crie uma função que chama ela mesma (recursiva) para somar N números
  o primeiro argumento é a quantidade de números M
  Ex: node .\05-funcoes.js 5
  1 + 2 + 3 + 4 + 5 = 15 (printar 15 no terminal)
*/

//Não se preocupe com essas três linhas, vamos aprender semana que vem.
const myArgs = process.argv.slice(2);
const myArgs1 = +myArgs[0];

let sum = 0;
const funcaoRecursiva = (count, current) => { // É obrigatório usar essa função com os parâmetros
  if (count < current) { 
    count++;
    console.log(count); //Console will print every value of count, meaning it will show every number from 1 to the user's chosen value
    funcaoRecursiva (count, current); //Recursive function: the funtion runs until it is not needed anymore, calling back to itself
    } else {
      return count; 
    }
  sum += count //Sum will add the count every time function run
} 

funcaoRecursiva(0, myArgs); //0 is needed to be given to count as the starting value, myArgs will take user's input
console.log(sum)