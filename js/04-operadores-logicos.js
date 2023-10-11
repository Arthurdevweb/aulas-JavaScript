// Requisitos da escola para aprovação 
"use strict"

const mediaMinima = 7;
const limiteDeFaltas = 10;


//Resultados do aluno fictício

let aluno = "Arthur"
let mediaFinal = 8.5;
let faltas = 11;
let resultado;

// Operador lógico E (AND)

// if (mediaFinal >= mediaMinima && faltas < limiteDeFaltas) {
//     resultado = "aprovado";
// }

// else {
//     resultado = "reprovado"
// }



if (mediaFinal >= mediaMinima && faltas <= limiteDeFaltas) {
    resultado = "Aprovado";
}

else if (faltas > limiteDeFaltas) {
    resultado = ("Reprovado por faltas ");
}

else {
    resultado = "Reprovado"
}

console.log(` O aluno ${aluno} está ${resultado}`);
console.log(`Média do aluno: ${mediaFinal}`);
console.log(`Faltas do aluno: ${faltas} `);

