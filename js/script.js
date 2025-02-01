const btnAlterarTema = document.querySelector("#btn-alterar-tema");
const body = document.querySelector("body");
const imgIcone = document.querySelector("#img-icone");
const logoIcone = document.querySelector("#logo-icone");

let temTemaEscuro = body.classList.contains("dark") ? true : false;

btnAlterarTema.addEventListener("click", function() {
    if (temTemaEscuro) {
        body.classList.remove("dark");
        imgIcone.src = "./recursos/night-icone.svg";
        logoIcone.src = "./recursos/marca-day.svg";
        temTemaEscuro = false;
    } else {
        body.classList.add("dark");
        imgIcone.src = "./recursos/day-icone.svg";
        logoIcone.src = "./recursos/marca-night.svg";
        temTemaEscuro = true;
    }
});