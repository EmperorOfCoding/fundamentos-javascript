fetch('https://jsonplaceholder.typicode.com/posts', {

    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title: 'Meu Post', body: 'Este é o corpo do meu post', userId: 1 })
})

    .then((resposta) => resposta.json())
    .then((postCriado) => {
        console.log('Post Criado: ', postCriado);
        console.log('Título do Post: ', postCriado.title);
    })
    .catch((erro) => console.log('Erro: ', erro))

