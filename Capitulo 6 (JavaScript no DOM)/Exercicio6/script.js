
button = document.getElementById("meu-botao");
title = document.querySelector("h1");

button.addEventListener("click", () => {

    title.style.color = "blue";
    title.textContent = "Voce clicou no Botao!";

})



