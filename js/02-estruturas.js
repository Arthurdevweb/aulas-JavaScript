/* Estruturas de dados 


- Arrays (Vetores/Matrizes):
Lista de dados indexados, sequenciais e acessíveis por um índice numérico.


-Objeto
lista de dados não indexados e formados por propriedades e valores. */


//Arrays

let cursos = ["Node.js", "React", "SQL", "UX/UI Design"];

console.log(cursos); // Saída direta
console.log(cursos[2]); // SQL

const dados = ["Arthur", "Augusto", 18, "369102324", "São Paulo"]

console.log(`O meu nome é ${dados[0]} e tenho ${dados[2]} anos`);


//Objetos 

let carro = {
    marca: "Hyundai",
    modelo: "Creta",
    portas: 4,
    cor: "preto",
    opcionais: ["Ar condicionado", "Vidros elétricos", "Sons"]
}

console.log(carro);
console.log(carro.modelo);

console.log(`A marca de carros ${carro.marca} desenvolveu um novo modelo de carro chamado ${carro.modelo} com ${carro.portas} portas e na cor ${carro.cor}. Você pode adicionar alguns opconais, que são: ${carro.opcionais[0]}, ${carro.opcionais[1]} e ${carro.opcionais[2]} de alta qualidade`);


let melhorTime = {
    time: "Palmeiras",
    Libertadores: 3,
    Idade: 109,
    Idolo: "Ademir da Guia",
    Mundial: 1, 
    piorTime: "Corinthians",
    Brasileirao: "Campeão",
    continente: "América do sul"
}

console.log(`Atualmente o ${melhorTime.time} é o melhor time da ${melhorTime.continente} tendo o total de ${melhorTime.Libertadores} libertadores e sendo o atual ${melhorTime.Brasileirao} do brasileirão. O ${melhorTime.time} tem ${melhorTime.Idade} e o  maior idolo do time é o ${melhorTime.Idolo}. O pior time da história do futebol é o ${melhorTime.piorTime}`);

