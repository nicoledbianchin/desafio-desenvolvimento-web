var dropdownButtons = document.querySelectorAll(".botao-dropdown");

dropdownButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    var content = this.nextElementSibling;

    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
});

var calcularButton = document.getElementById("calcular");
var resultElement = document.getElementById("resultado");

calcularButton.addEventListener("click", function() {
  var weightInput = document.getElementById("peso");
  var lifeStageSelect = document.getElementById("idade");
  var weight = parseFloat(weightInput.value);
  var lifeStage = lifeStageSelect.value;
  var recommendedAmount = "";

  if (lifeStage === "filhote") {
    if (weight >= 2 && weight <= 3) {
      recommendedAmount = "40 g a 50 g";
    } else if (weight > 3 && weight <= 4) {
      recommendedAmount = "50 g a 60 g";
    } else if (weight > 4 && weight <= 6) {
      recommendedAmount = "60 g a 70 g";
    } else if (weight > 6 && weight <= 12) {
      recommendedAmount = "70 g a 80 g";
    }
  } else if (lifeStage === "adulto") {
    if (weight >= 3 && weight <= 4) {
      recommendedAmount = "40 g a 55 g";
    } else if (weight > 4 && weight <= 6) {
      recommendedAmount = "55 g a 75 g";
    }
  } else if (lifeStage === "idoso") {
    if (weight >= 3 && weight <= 4) {
      recommendedAmount = "45 g a 60 g";
    } else if (weight > 4 && weight <= 6) {
      recommendedAmount = "60 g a 75 g";
    }
  }

  if (recommendedAmount !== "") {
    resultElement.textContent = "Quantidade recomendada de ração por dia: " + recommendedAmount;
  } else {
    resultElement.textContent = "Por favor, insira um peso válido e selecione uma etapa de vida.";
  }
});
  