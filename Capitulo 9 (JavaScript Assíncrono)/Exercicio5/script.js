const promessa = new Promise((resolve, reject) => {

    setTimeout(() => {

        resolve(10);

    }, 3000);
});


promessa.then((resultado) => console.log(resultado))
promessa.catch((erro) => ('Erro: ', erro))
promessa.finally(console.log("Promessa manipulada"))


