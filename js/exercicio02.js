// 1. Crie um arquivo chamado exercicio02.html.

 

// 2. A partir dele, faça um script chamado exercicio02.js (não se esqueça de usar a pasta js).

 

// 3. Crie um array chamado alunos contendo 3 objetos, cada objeto com um ID (1, 2 e 3) e um nome de um aluno (Joãozinho, Mariazinha, Giuseppezinho).

 

// 4. Faça um loop (qualquer um dos 3 que vimos) e mostre no console o nome de cada aluno. Exemplo de saída: 
//     - Aluno: Joãozinho
//     - Aluno: Mariazinha
//     - Aluno: Giuseppezinho


let alunos = [
   {
        id: 1,
        nome: "Joãozinho"
    },
 
    {
        id: 2,
        nome: "Mariazinha"
    },

    {
        id: 3,
        nome: "Giuseppezinho"
    }
];


let quantidade = alunos.length;

for (let i = 0; i < quantidade; i++) {
    console.log(alunos[i].nome);
}