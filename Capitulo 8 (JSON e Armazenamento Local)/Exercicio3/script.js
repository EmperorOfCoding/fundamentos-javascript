
valor_texto = document.getElementById('text');
botao = document.querySelector("button");

document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();

    const texto = valor_texto.value;

    if (texto === "") {

        alert("Por favor insira um valor antes de salvar!");
        return;
    }

    localStorage.setItem("meuTexto", texto);
    texto_salvo = localStorage.getItem("meuTexto");

    console.log(`Valor salvo no LocalStorage: ${texto}`);
    console.log(texto_salvo);

    alert("Valor salvo com sucesso!");

});