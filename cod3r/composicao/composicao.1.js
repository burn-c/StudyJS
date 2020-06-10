// Tem limite de 3 funções
function composicao(fn1, fn2, fn3) {
  return function (valor) {
    return fn3(fn2(fn1(valor)));
  };
}
