
obj = {
    Nome: "Victor Martins",
    Idade: 19,
    Estado_Civil: "Solteiro",
    ehEmpregado: true
};

obj_json = JSON.stringify(obj);
localStorage.setItem("meuObj", obj_json);
console.log(obj_json);

recuperar_json = localStorage.getItem("meuObj");
obj_json_recuperado = JSON.parse(recuperar_json);
console.log(obj_json_recuperado);