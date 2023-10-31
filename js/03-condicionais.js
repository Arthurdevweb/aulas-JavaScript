/* Estruturas de controle de condicional
Comandos que permitam analisar umas ou mais consições. E a partir do resultado desta análise (verdeiro ou falso), o programa pode executar ações diferentes. 

Comandos mais comuns: 

if (se), else (senão), else if (senão se) */

let usuario = prompt ("qual o seu nome ? ");
let idade = prompt ("quantos anos você tem?");

// Verificar a idade e determinar se é menor ou maior

/* if ( idade >= 18) {
    mensagem = "maior"
}

else {
    mensagem = "menor"
} */

/* console.log(`${usuario}é ${mensagem} de idade!`);
alert(`${usuario}é ${mensagem} de idade!`);
 */


if ( idade >= 60) {
    mensagem = "Idoso(a)";
}

else if ( idade >= 18) {
    mensagem = "Adulto(a)";
}

else {
    mensagem = "menor";
}

console.log(`${usuario} você tem ${idade} anos e é considerado ${mensagem}`);

alert(`${usuario} você tem ${idade} anos e é considerado ${mensagem}`);
