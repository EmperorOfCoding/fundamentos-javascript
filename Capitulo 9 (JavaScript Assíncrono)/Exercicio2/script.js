fetch('https://jsonplaceholder.typicode.com/users', {

    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
})
    .then((resposta) => resposta.json())
    .then((dado) => console.log(dado));