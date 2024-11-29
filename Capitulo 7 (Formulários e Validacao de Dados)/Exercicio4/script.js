checkbox = document.getElementById('meuCheckbox');

document.getElementById('meuFormulario').addEventListener('submit', (event) => {

    event.preventDefault();


    if (checkbox.checked === true) {

        alert("Formulário submetido com sucesso!");
    }

    else {
        alert("Erro!");
    }

});