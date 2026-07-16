// ---------------------- Botão de voltar para o topo: ----------------------
document.addEventListener("DOMContentLoaded", function() {
    var backToTopBtn = document.getElementById("backToTopBtn");
    
    window.addEventListener("scroll", function() {
        if (window.pageYOffset > 100) { // Mostra o botão quando a página é rolada
            backToTopBtn.style.display = "block";
        } else {
            backToTopBtn.style.display = "none";
        }
    });

    backToTopBtn.addEventListener("click", function() {
        window.scrollTo({ top: 0, behavior: "smooth" }); // Leva o usuário de volta ao topo suavemente
    });
});

// ---------------------- Botão de modo noturno: ----------------------

// Seleciona o botão de alternância de modo (no caso, o botão de tema)
const themeToggle = document.getElementById("theme-toggle-button");
// Seleciona o elemento body do documento
const body = document.body;

// Adiciona um ouvinte de evento ao botão de alternância de tema
themeToggle.addEventListener("click", () => {
  // Verifica se o body tem a classe "dark-mode" (modo noturno ativado)
  if (body.classList.contains("dark-mode")) {
    // Remove a classe "dark-mode" e adiciona a classe "light-mode"
    body.classList.remove("dark-mode");
    body.classList.add("light-mode");
    // Salva a preferência do tema no localStorage como "light"
    localStorage.setItem("theme", "light");
  } else {
    // Se não estiver no modo noturno, remove "light-mode" e adiciona "dark-mode"
    body.classList.remove("light-mode");
    body.classList.add("dark-mode");
    // Salva a preferência do tema no localStorage como "dark"
    localStorage.setItem("theme", "dark");
  }
});

// Recupera a preferência do usuário do localStorage ao carregar a página
const savedTheme = localStorage.getItem("theme");
// Verifica se a preferência do usuário é "dark"
if (savedTheme === "dark") {
  // Adiciona a classe "dark-mode" ao body para aplicar o modo noturno
  body.classList.add("dark-mode");
} else {
  // Caso contrário, adiciona a classe "light-mode" para aplicar o modo claro
  body.classList.add("light-mode");
}
// ----------------- PARTE DA TRADUÇÃO DA PÁGINA -----------------
const flagPT = document.getElementById("flag-pt");
const flagEN = document.getElementById("flag-en");
const elementsToTranslate = document.querySelectorAll("[data-lang]");

// Exibir o conteúdo em português (inicialmente)
translatePage("pt");

flagPT.addEventListener("click", () => {
  translatePage("pt");
});

flagEN.addEventListener("click", () => {
  translatePage("en");
});

function translatePage(language) {
  elementsToTranslate.forEach(element => {
    const originalText = element.getAttribute("data-lang");
    if (originalText === language) {
      element.style.display = "block"; // Mostra o texto no idioma selecionado
    } else {
      element.style.display = "none"; // Esconde o texto em outros idiomas
    }
  });
}
