campo_email = document.getElementById('email');

document.getElementById('meuFormulario').addEventListener("submit", (event) => {
    event.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(campo_email.value)) {

        alert("Formulário submetido com sucesso!")
    }

    else {
        alert("E-mail inválido!")
        campo_email.style.border = "2px red solid";
    }


});