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

// Objeto com array e com outro objeto 

let pessoa = {
    nome: "Shiryu",
    idade: 20,
    telefones: ["(11) 96310-2324", "(11) 96344-7774 "],
    medidas: {
        peso: 65,
        altura: 1.84
    } 
}

console.log(`Nome: ${pessoa.nome}`);
console.log(`Celular: ${pessoa.telefones[0]}`);
console.log(`Peso: ${pessoa.medidas.peso}kg`);

// Array de objetos 

let alunos = [
    {
        nome: "Rapahel veiga",
        idade: 10
    },
    
    {
        nome: "Endrick",
        idade: 17
    },
    
    {
        nome: "Kevin",
        idade: 19
    }
]

console.log(alunos[1].nome); //endrick
console.log(alunos[0].nome); //Rapahel veiga

// Array com matriz 

let tecnologias = [
    ["HTML5", "CSS3", "JavaScript"],
    ["PHP", "SQL", "APIs", "Node", "Python"],
    ["Figma", "Photoshop"],
];

console.log(tecnologias[1][3]);// node 
console.log(tecnologias[2][1]);// Photoshop
console.log(tecnologias[0][0]);// HTML5
console.table(cursos)