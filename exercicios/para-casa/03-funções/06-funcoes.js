/*
  Crie um programa que usa uma função que retorna outra que calcula a circunferência do circulo
  A fórmula é ==> C = πd (circunferência = PI * diâmetro)
  Ex: node .\02-funcoes.js 10
  printar 31.4
*/

//Não se preocupe com essas três linhas, vamos aprender semana que vem.
const myArgs = process.argv.slice(2);
const myArgs1 = +myArgs[0]; //converteu como número

const gerarFuncao = () => { // É obrigatório usar essa função com os parâmetros
  const PI = 3.14;
  const funcaoGerada = (diametro) => {
    console.log(diametro * PI)
    return diametro * PI
   } //esses sinais marcam o que é uma função.
  return funcaoGerada //aqui nao usa as chaves porque aqui que vai ser a responsavel por retornar a função gerada acima, só chamar, e não executar, por isso não usa os sinais.

}

const calcularCircunferencia = gerarFuncao();
calcularCircunferencia(myArgs1);

//aqui é fazer uma função que chame outra função para executar o que se pede.

//quando dá o return tudo para baixo não é executado, ou seja, quando executa, vai para o console e retorna.