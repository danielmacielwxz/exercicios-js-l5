# Etapa 8 — Calculadora de média

**8.3 — Por que não `n1 + n2 / 2`?**
Porque a divisão é feita antes da soma. Com 8 e 6, fica 8 + 3 = **11**, mas a média certa é (8 + 6) / 2 = **7**. Por isso uso parênteses: `(n1 + n2) / 2`.

**8.6 — Tabela de testes**

| Nota 1 | Nota 2 | Resultado |
|---|---|---|
| 8 | 7 | Média: 7.5 - Aprovado |
| 5 | 6 | Média: 5.5 - Abaixo da média |
| 6 | 6 | Média: 6.0 - Aprovado |
| 10 | 10 | Média: 10.0 - Aprovado |
| (vazio) | 5 | Informe duas notas entre 0 e 10. |
| 11 | 5 | Informe duas notas entre 0 e 10. |

**Checkpoint**

1. A média ficou numa função separada para o código ficar mais organizado. Assim eu posso reaproveitar a função e testar ela sozinha no console.
2. Só **uma linha**, a `const NOTA_MINIMA = 6;`. O resto do código usa só o nome, então mudar ali já muda tudo.
