
let campo_nome = document.getElementById('nome');

document.getElementById('meuFormulario').addEventListener("submit", (event) => {

    event.preventDefault();

    if (campo_nome.value === '') {

        alert("Por favor, insira um nome!")
        return false;
    }

    else {
        alert("Obrigado!")
    }
});