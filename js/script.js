const btnAlterarTema = document.querySelector("#btn-alterar-tema");
const body = document.querySelector("body");
const temaIcone = document.querySelector("#img-icone");
const giovannaIcone = document.querySelector("#logo-icone");

let temTemaEscuro = body.classList.contains("dark") ? true : false;

const iconMenuLateral = document.querySelector("#btn-abrir-menu");
const menuLateral = document.querySelector("#header-menu-lateral");
const menuLinks = document.querySelectorAll('.nav-a-lateral');
const btnFecharMenu = document.querySelector("#btn-fechar-menu");

btnAlterarTema.addEventListener("click", function() {
    if (temTemaEscuro) {
        body.classList.remove("dark");
        temaIcone.src = "./recursos/icone-tema-dia.svg";
        giovannaIcone.src = "./recursos/Giovanna-dia.svg";
        iconMenuLateral.src = "./recursos/menu-icone-dia.svg"
        temTemaEscuro = false;
    } else {
        body.classList.add("dark");
        temaIcone.src = "./recursos/icone-tema-noite.svg";
        giovannaIcone.src = "./recursos/Giovanna-noite.svg";
        iconMenuLateral.src = "./recursos/menu-icone-noite.svg"
        temTemaEscuro = true;
    }
});
// Criando um evento de click para abrir o menu e criando um evento para quando o usuário clicar fora do menu lateral
iconMenuLateral.addEventListener('click', function () {
    alternarMenu()
    console.log("teste");
  });

function alternarMenu() {
    if (menuLateral.classList.contains("aberto")) {
      menuLateral.classList.remove("aberto");
      menuLateral.classList.add("fechado");
      iconMenuLateral.classList.remove("oculto");
    } else {
      menuLateral.classList.remove("fechado");
      menuLateral.classList.add("aberto");
      iconMenuLateral.classList.add("oculto");
    }
  }
  btnFecharMenu.addEventListener('click', () => {
    alternarMenu()
  });

