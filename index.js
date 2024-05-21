// Função para abrir o modal:

function abrirModal() {
  let modal = document.querySelector(".modal");
  let modalStyle = modal.style.display;
  if (modalStyle === "block") {
    modal.style.display = "none";
  } else {
    modal.style.display = "block";
  }
}

// Função para fechar o modal:

window.onclick = function (event) {
  let modal = document.querySelector(".modal");
  if (event.target == modal) {
    abrirModal();
  }
};
