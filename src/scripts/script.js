document.addEventListener("DOMContentLoaded", function() {
    var dropdownButtons = document.querySelectorAll(".dropbtn");
  
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

    var calculateButton = document.getElementById("calculate");
    var resultElement = document.getElementById("result");
  
    calculateButton.addEventListener("click", function() {
      var weightInput = document.getElementById("weight");
      var lifeStageSelect = document.getElementById("life-stage");
      var weight = parseFloat(weightInput.value);
      var lifeStage = lifeStageSelect.value;
      var recommendedAmount = "";
  
      if (lifeStage === "kitten") {
        if (weight >= 2 && weight <= 3) {
          recommendedAmount = "40 g a 50 g";
        } else if (weight > 3 && weight <= 4) {
          recommendedAmount = "50 g a 60 g";
        } else if (weight > 4 && weight <= 6) {
          recommendedAmount = "60 g a 70 g";
        } else if (weight > 6 && weight <= 12) {
          recommendedAmount = "70 g a 80 g";
        }
      } else if (lifeStage === "adult") {
        if (weight >= 3 && weight <= 4) {
          recommendedAmount = "40 g a 55 g";
        } else if (weight > 4 && weight <= 6) {
          recommendedAmount = "55 g a 75 g";
        }
      } else if (lifeStage === "senior") {
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
  });
  