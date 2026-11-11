// Etapa 2 - Variáveis e tipos
const escola = "IFC Concórdia";
let nota1 = 8.5;
let aprovado = false;
let sobrenome;

console.log(typeof escola);
console.log(typeof nota1);
console.log(typeof aprovado);
console.log(typeof sobrenome);

nota1 = 9; // let permite trocar o valor
console.log(nota1); // experimento por conta própria: deve aparecer 9
escola = "Outra"; // o que vai acontecer aqui? (erro: escola é const)
