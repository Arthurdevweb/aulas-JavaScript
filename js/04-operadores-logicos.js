// Requisitos da escola para aprovação 
"use strict"

const mediaMinima = 7;
const limiteDeFaltas = 10;


//Resultados do aluno fictício

let aluno = "Arthur"
let mediaFinal = 9;
let faltas = 10;
let resultado;

// Operador lógico E (AND)

// if (mediaFinal >= mediaMinima && faltas < limiteDeFaltas) {
//     resultado = "aprovado";
// }

// else {
//     resultado = "reprovado"
// }



// if (mediaFinal >= mediaMinima && faltas <= limiteDeFaltas) {
//     resultado = "Aprovado";
// }

// else if (faltas > limiteDeFaltas) {
//     resultado = ("Reprovado por faltas ");
// }

// else {
//     resultado = "Reprovado"
// }


if (faltas > limiteDeFaltas) {
    resultado = "Reprovado por faltas";
}

else if (mediaFinal >= mediaMinima) {
    resultado = "Aprovado";
}

else {
    resultado = "Reprovado";
}
console.log(` O aluno ${aluno} está ${resultado}`);
console.log(`Média do aluno: ${mediaFinal}`);
console.log(`Faltas do aluno: ${faltas} `);


console.log("------------------------------------------------");


// Operador lógico || (OR - OU)

let diiDaSemana = "domingo";

if (diiDaSemana == "sábado" || diiDaSemana == "domingo") {
    console.log("Final de semana :)");
}

else {
    console.log("vá trabalhar...");
}

