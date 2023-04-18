// nesse caso o ts consegue inferir o tipo de retorno da funcao
function sum (a: number, b: number) {
  a + b;
}

sum(1, 3);