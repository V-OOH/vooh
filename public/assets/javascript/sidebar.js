const button = document.querySelector(".icon");
const sidebar = document.querySelector(".sidebar");
const logo = document.getElementById("logo");

// Evento de clique para reduzir a sidebar
button.addEventListener("click", () => {
  if (!sidebar.classList.contains("reduced")) {
    sidebar.classList.add("reduced");
    localStorage.setItem("sidebar", "reduced");
  } else {
    sidebar.classList.remove("reduced");
    localStorage.clear();
  }
});

// Ao carregar a DOM, verifica se o status da sidebar é 'reduced', aplicando a classe
document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("sidebar") == "reduced") {
    sidebar.classList.add("reduced");
  }
});
