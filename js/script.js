// Criando constantes e variáveis
const btnAlterarTema = document.querySelector("#btn-alterar-tema");
const body = document.querySelector("body");
const temaIcone = document.querySelector("#img-icone");
const giovannaIcone = document.querySelector("#logo-icone");

let temTemaEscuro = body.classList.contains("dark") ? true : false;

const btnMenuLateral = document.querySelector("#btn-abrir-menu");
const iconMenuLateral = document.querySelector("#icon-menu-lateral");
const menuLateral = document.querySelector("#header-menu-lateral");
const menuLinks = document.querySelectorAll('.nav-a-lateral');
const btnFecharMenu = document.querySelector("#btn-fechar-menu");

// Criando um evento de click, com uma função para verificar qual tema deve ser aplicado entre ou o escuro ou o claro
btnAlterarTema.addEventListener("click", function() {
    if (temTemaEscuro) {
        body.classList.remove("dark");
        temaIcone.src = "./recursos/icone-tema-dia.svg";
        giovannaIcone.src = "./recursos/Giovanna-dia.svg";
        iconMenuLateral.src = "./recursos/menu-icone-dia.svg";
        temTemaEscuro = false;
    } else {
        body.classList.add("dark");
        temaIcone.src = "./recursos/icone-tema-noite.svg";
        giovannaIcone.src = "./recursos/Giovanna-noite.svg";
        iconMenuLateral.src = "./recursos/menu-icone-noite.svg";
        temTemaEscuro = true;
    }
});
// Criando um evento de click para abrir o menu
btnMenuLateral.addEventListener('click', function () {
    alternarMenu()
    console.log("teste");
  });

function alternarMenu() {
    if (menuLateral.classList.contains("aberto")) {
      menuLateral.classList.remove("aberto");
      menuLateral.classList.add("fechado");
      btnMenuLateral.classList.remove("oculto");
    } else {
      menuLateral.classList.remove("fechado");
      menuLateral.classList.add("aberto");
      btnMenuLateral.classList.add("oculto");
    }
  }
  btnFecharMenu.addEventListener('click', () => {
    alternarMenu()
  });

