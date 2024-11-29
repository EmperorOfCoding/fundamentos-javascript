let pessoa = {

    nome: 'Joao',
    idade: 30,
    cidade: 'Rio de Janeiro'
};

localStorage.setItem('pessoa', JSON.stringify(pessoa));

let pessoaRecuperada = JSON.parse(localStorage.getItem('pessoa'));

console.log(pessoa)