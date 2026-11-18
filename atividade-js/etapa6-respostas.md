# Etapa 6 — Funções

**1. O que a função imprime e qual é o erro?**
Imprime **`undefined`**. A função faz a conta, mas não devolve o resultado, porque esqueci o `return`. Para corrigir:
```js
function soma(a, b) {
  return a + b;
}
```

**2. Função `ehPar`:**
```js
function ehPar(n) {
  return n % 2 === 0;
}
```
Se o resto da divisão por 2 for 0, o número é par.

**3. Diferença entre `console.log(x)` e `return x`:**
O `console.log` só mostra o valor na tela do console, e a função não entrega nada. O `return` devolve o valor para quem chamou a função, e aí dá para guardar numa variável ou usar em outras contas. Além disso, o `return` encerra a função.
