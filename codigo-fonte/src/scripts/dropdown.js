var dropdownButtons = document.querySelectorAll(".botao-dropdown");

dropdownButtons.forEach(function(button) {
    button.addEventListener("click", function() {
    var conteudo = this.nextElementSibling;

    if (conteudo.style.display === "block") {
        conteudo.style.display = "none";
    } else {
        conteudo.style.display = "block";
    }
    });
});
  