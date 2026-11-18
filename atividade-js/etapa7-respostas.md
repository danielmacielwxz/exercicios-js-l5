# Etapa 7 — DOM e eventos

Também fiz as duas alterações pedidas: pintei a mensagem de verde (`mensagem.style.color = "green"`) e fiz o botão mudar para "Clicado!" (`botao.textContent = "Clicado!"`).

**1. Que erro aparece sem o `defer`?**
Aparece `TypeError: Cannot set properties of null`. Sem o `defer`, o script roda antes de o navegador terminar de ler o `<body>`. Aí o `getElementById` não acha o parágrafo e devolve `null`, e não dá para mudar o texto de "nada".

**2. O que acontece a cada clique?**
O navegador percebe o clique e executa a função do `addEventListener`. Ela soma 1 em `cliques` e mostra o novo número no `<span>`. O botão também troca o texto para "Clicado!".

**3. Por que `let` e não `const` em `cliques`?**
Porque o valor muda a cada clique. Com `const` daria erro, já que não dá para trocar o valor depois.
