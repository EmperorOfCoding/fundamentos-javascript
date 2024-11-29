campo_senha = document.getElementById('senha');

document.getElementById('meuFormulario').addEventListener("submit", (event) => {

    const senha_regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (senha_regex.test(campo_senha.value)) {

        alert("Senha Cadastrada com Sucesso!");
    }

    else {
        alert("Senha inválida");
    }

});