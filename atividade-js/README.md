# Introdução ao JavaScript - Etapas 0 a 4

Desenvolvimento Web I - Técnico Integrado em Informática para Internet (Prof. Hewerton Oliveira, 2026)

Aqui estão os exercícios das etapas 0 a 4 da apostila. A apostila manda apagar o `script.js` a cada etapa, então guardei o código de cada uma em um arquivo separado pra não perder o que já fiz.

Arquivos da pasta:

- `index.html` e `script.js`: etapa 0
- `etapa2-variaveis.js`: etapa 2
- `etapa3-operadores.js`: etapa 3
- `etapa4-condicionais.js`: etapa 4

Pra ver uma etapa no navegador, é só trocar o nome do arquivo no `src` do `<script>` dentro do `index.html` e abrir o console (F12). Também dá pra rodar com o node, por exemplo `node etapa3-operadores.js`.

---

## Etapa 0 - Preparando o ambiente

Criei a pasta `atividade-js`, abri no VS Code e fiz o `index.html` e o `script.js` do jeito que a apostila mostra. Quando abro a página, o título e o parágrafo "Aguardando o JavaScript..." aparecem na tela e o `Olá, JavaScript!` aparece só no console.

### Checkpoint

**1. Em qual aba das ferramentas do desenvolvedor a mensagem apareceu?**

Na aba Console.

**2. Por que o `defer` vai ser importante quando o script precisar mexer em elementos da página?**

Porque mais pra frente o script vai procurar elementos da página, tipo o parágrafo com `id="mensagem"`. Se o script rodasse antes do navegador terminar de ler o HTML, esse parágrafo ainda não ia existir e a busca voltaria `null`, aí dá erro na hora de mudar o texto dele. Com o `defer`, o script só roda depois que o HTML todo foi lido.

**3. E se o HTML tivesse `<script src="codigo.js" defer>` mas o arquivo se chamasse `script.js`?**

O navegador não ia achar o `codigo.js`, porque o arquivo na verdade é `script.js`. Então o script não era carregado e o `Olá, JavaScript!` não aparecia no console. A página abria normal, mas provavelmente ia aparecer um erro vermelho de arquivo não encontrado (404). O nome no `src` tem que ser exatamente igual ao do arquivo.

---

## Etapa 1 - O que é JavaScript

Digitei as expressões direto no console do navegador:

| Expressão | Resultado observado |
| --- | --- |
| `2 + 3` | `5` |
| `"Web" + " I"` | `"Web I"` |
| `"5" + 3` | `"53"` |
| `"5" - 3` | `2` |
| `2 + 3 * 4` | `14` |
| `(2 + 3) * 4` | `20` |

### Checkpoint

**1. Por que `"5" + 3` e `"5" - 3` dão resultados tão diferentes?**

O `+` serve pra somar números e também pra juntar textos. No `"5" + 3` tem um texto de um lado, então o JavaScript transforma o `3` em `"3"` e junta os dois, dando `"53"`. Já o `-` só funciona com número, então ele converte o `"5"` pra `5` e faz `5 - 3 = 2`.

**2. Por que `2 + 3 * 4` e `(2 + 3) * 4` dão resultados diferentes?**

Porque a multiplicação é feita antes da soma, igual na matemática. Em `2 + 3 * 4` ele faz primeiro `3 * 4 = 12` e depois `2 + 12 = 14`. Com os parênteses a soma vem primeiro: `5 * 4 = 20`.

---

## Etapa 2 - Variáveis e tipos

O código está no `etapa2-variaveis.js`. Além do que a apostila pede, acrescentei um `console.log(nota1);` antes da linha `escola = "Outra";`.

### Checkpoint

**1. O que as quatro linhas com `typeof` vão imprimir?**

```
string
number
boolean
undefined
```

`escola` guarda um texto, `nota1` guarda o 8.5 (número), `aprovado` guarda `false` (boolean) e `sobrenome` nunca recebeu valor, então é `undefined`.

**2. Qual erro apareceu no console na última linha? Por que ele ocorre?**

`TypeError: Assignment to constant variable.` Acontece porque a `escola` foi criada com `const`, e `const` não deixa trocar o valor depois. Pra poder trocar, ela teria que ser `let`. Os `console.log` de antes aparecem normal, o erro só vem na última linha.

**3. Quais destes nomes de variável são válidos?**

- `nota_final`: válido, pode ter letra e `_`.
- `3nota`: inválido, porque não pode começar com número.
- `nota-final`: inválido, porque não pode ter hífen. O JavaScript ia ler como `nota` menos `final`, uma subtração.
- `$total`: válido, o `$` pode.
- `class`: inválido, é uma palavra reservada da linguagem.

**4. O que vai ser impresso?**

```js
let idade = 15;
idade = idade + 1;
console.log(idade);
```

Imprime `16`. A `idade` começa com 15, aí o `idade = idade + 1` pega o 15, soma 1 e guarda o 16 na mesma variável.

### Experimentos que a apostila pediu

Com o `console.log(nota1);` antes da linha da `const`, apareceu `9`, porque o `nota1 = 9;` já tinha trocado o valor. Quando mudei pra `let nota1 = "8.5";` (com aspas), o `typeof nota1` passou a imprimir `string`, porque as aspas transformam o 8.5 em texto.

---

## Etapa 3 - Operadores, conversão e texto com variáveis

O código está no `etapa3-operadores.js`.

### Checkpoint

**1. Qual a saída de cada `console.log` (8 linhas)?**

```
9 5 14
3.5
1
49
Olá, Ana! 7 dividido por 2 é 3.5.
8.5
7.51
NaN
```

Com `a = 7` e `b = 2`, a soma dá 9, a subtração dá 5 e a multiplicação dá 14. O `7 / 2` dá 3.5. O `7 % 2` dá 1, porque 7 dividido por 2 dá 3 e sobra 1. O `7 ** 2` dá 49. No template literal, cada `${ }` é trocado pelo valor que está dentro. E o `Number("abc")` não consegue virar número, então dá `NaN`.

**2. Qual a diferença entre `Number("7.5") + 1` e `"7.5" + 1`? O que isso significa pra quem lê um número digitado em um formulário?**

O `Number("7.5") + 1` converte o texto em número e soma, então dá o número `8.5`. O `"7.5" + 1` soma um texto com um número, então o JavaScript junta os dois e dá o texto `"7.51"`.

Num formulário, o que a pessoa digita chega como texto, mesmo que seja um número. Se eu fizer conta sem converter, o `+` vai juntar em vez de somar. Por isso tem que usar o `Number()` antes de calcular.

**3. Sem executar, calcule `10 % 3`, `2 ** 3` e `10 / 4`.**

- `10 % 3 = 1`, porque 10 dividido por 3 dá 3 e sobra 1.
- `2 ** 3 = 8`, porque 2 × 2 × 2 = 8.
- `10 / 4 = 2.5`.

---

## Etapa 4 - Condicionais

O código está no `etapa4-condicionais.js`. Testei com `temperatura` valendo 25, 30, 20 e 19, e deu "Agradável", "Calor", "Agradável" e "Frio".

### Checkpoint

**1. Com `temperatura = 20`, qual mensagem aparece? E com 30? Por quê?**

Com 20 aparece "Agradável". O `20 >= 30` é falso, então ele vai pro `else if`, e o `20 >= 20` é verdadeiro porque o `>=` aceita igual.

Com 30 aparece "Calor", porque o `30 >= 30` já é verdadeiro logo na primeira condição e o resto é ignorado. Nos limites, quem decide é o "ou igual".

**2. Quais as saídas das quatro últimas linhas? Por que recomendam `===`?**

```
true
false
true
false
```

O `==` converte os tipos antes de comparar, então ele acha que `5` e `"5"` são iguais, e que `0` e `false` também. O `===` olha o valor e o tipo, então só dá `true` quando os dois são iguais. Por isso é melhor usar sempre o `===`, pra não ter resultado surpresa.

**3. Condição que seja verdadeira só quando `nota` estiver entre 0 e 10 (inclusive):**

```js
nota >= 0 && nota <= 10
```

O `&&` exige que as duas partes sejam verdadeiras, e o `>=` e o `<=` incluem o 0 e o 10.
