const formEl = document.querySelector("#formulario-contato");

formEl.addEventListener("submit", async function(e) {
  e.preventDefault();

  let data = new FormData(formEl);

  let response = await fetch(formEl.action, {
      method: formEl.method,
      body: data,
      headers: { 'Accept': 'application/json' }
  });

  if(response.ok){
    alert("Mensagem enviada!");
    form.reset();
  }else{
    alert("Erro ao enviar o email. Tente novamente.");
  }
});