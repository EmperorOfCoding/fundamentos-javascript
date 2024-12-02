async function getPrimeiroTitulo() {

    const response = await
        fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    return data[0].title;
}

getPrimeiroTitulo().then(console.log);