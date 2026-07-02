// Mensagem inicial
window.onload = function () {
    console.log("Site Agro Forte carregado com sucesso!");
};

// Contador de cliques
let cliques = 0;

// Função do botão
function mensagem() {
    cliques++;

    const texto = document.getElementById("mensagem");
    texto.innerHTML =
        "🌱 Cada atitude sustentável fortalece o agro e protege o meio ambiente!<br>" +
        "Você clicou " + cliques + " vez(es).";

    texto.style.opacity = "1";
}

// Efeito ao passar o mouse nas imagens
const imagens = document.querySelectorAll("img");

imagens.forEach(function(img) {
    img.addEventListener("mouseover", function() {
        img.style.transform = "scale(1.05)";
        img.style.transition = "0.3s";
    });

    img.addEventListener("mouseout", function() {
        img.style.transform = "scale(1)";
    });
});
