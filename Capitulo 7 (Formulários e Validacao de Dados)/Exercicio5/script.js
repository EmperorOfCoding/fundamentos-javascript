campo_nome = document.getElementById('nome');
campo_email = document.getElementById('email');
campo_feedback = document.getElementById('feedback');

document.getElementById('meuFormulario').addEventListener("submit", (event) => {
    event.preventDefault();

    if (campo_nome.value === "") {

        alert("Por favor, preencha o nome!");

    }

    else if (campo_email.value === "") {

        alert("Por favor, preencha o email!");
    }

    else if (campo_feedback.value === "") {

        alert("Por favor, preencha o feedback!");
    }

    else {
        alert("Formulário submetido com sucesso")
    }


});