
const promessa = new Promise((resolve) => {

    setTimeout(() => {

        resolve("Operacao bem sucedida!");
    }, 2000);
});


promessa.then((resultado) => console.log(resultado))