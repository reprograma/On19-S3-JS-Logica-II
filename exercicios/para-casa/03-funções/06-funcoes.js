/*
  Crie um programa que usa uma função que retorna outra que calcula a circunferência do circulo
  A fórmula é ==> C = πd (circunferência = PI * diâmetro)
  Ex: node .\02-funcoes.js 10
  printar 31.4
*/

//Não se preocupe com essas três linhas, vamos aprender semana que vem.
const myArgs = process.argv.slice(2);
const myArgs1 = myArgs[0];

const gerarFuncao = (PI) => { // É obrigatório usar essa função com os parâmetros
  const funcaoGerada = (diametro) => {
    return diametro * PI; 
   }
  return funcaoGerada
}

const xtudo = gerarFuncao(20);
const xtudo2 = gerarFuncao(3.14);
const calcularCircunferencia = gerarFuncao();
calcularCircunferencia(myArgs1);
console.log(xtudo(myArgs));
console.log(xtudo2(myArgs));

/* const myArgs = process.argv.slice(2);
const myArgs1 = myArgs[0];

const gerarFuncao = () => { // É obrigatório usar essa função com os parâmetros
  const PI = 3.14;
  const funcaoGerada = (diametro) => {
    console.log(Number.parseInt(diametro) * PI)
    return diametro * PI; 
   }
  return funcaoGerada
}

const calcularCircunferencia = gerarFuncao();
calcularCircunferencia(myArgs1); */