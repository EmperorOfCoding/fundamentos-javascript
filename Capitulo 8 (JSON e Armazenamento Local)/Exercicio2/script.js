
obj_second = {

    nome: "Victor Martins",
    idade: 19,
    faculdade: "FIAP - Faculdade de Informatica e Administracao Paulista"
};


obj_main = {

    string: "Este é um texto",
    numero: 50,
    booleano: true,
    objeto: obj_second,
    array: [2, 7, 9, 10, 12]
};

obj_main = JSON.stringify(obj_main);

console.log(obj_main);

obj_main = JSON.parse(obj_main);

console.log(obj_main);