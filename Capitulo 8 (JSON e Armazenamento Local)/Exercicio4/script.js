let campo_texto = document.getElementById('text');
let botao_1 = document.getElementById('btn-1');
let botao_2 = document.getElementById('btn-2');


document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();


});


botao_1.addEventListener("click", (event) => {
    event.preventDefault();

    if (campo_texto.value === "") {
        alert("Por favor, insira um texto antes de clicar em um dos botoes!");

    }

    else {

        localStorage.setItem("meuTexto", campo_texto.value);
        alert("Texto Salvo com Sucesso!");

    }

});

botao_2.addEventListener("click", (event) => {
    event.preventDefault();

    let texto_salvo = localStorage.getItem("meuTexto");

    if (texto_salvo) {

        alert(`Texto salvo: ${texto_salvo}`);
    }

    else {
        alert("Nenhum texto foi salvo ainda!");
    }
});










