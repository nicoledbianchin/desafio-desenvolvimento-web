var botaoCalcular = document.getElementById("calcular");
var resultado = document.getElementById("resultado");

botaoCalcular.addEventListener("click", function() {
  var inputPeso = document.getElementById("peso");
  var selectidade = document.getElementById("idade");
  var peso = parseFloat(inputPeso.value);
  var idade = selectidade.value;
  var quantidadeRecomendada = "";

  if (idade === "filhote") {
    if (peso >= 2 && peso <= 3) {
      quantidadeRecomendada = "40 g a 50 g";
    } else if (peso > 3 && peso <= 4) {
      quantidadeRecomendada = "50 g a 60 g";
    } else if (peso > 4 && peso <= 6) {
      quantidadeRecomendada = "60 g a 70 g";
    } else if (peso > 6 && peso <= 12) {
      quantidadeRecomendada = "70 g a 80 g";
    }
  } else if (idade === "adulto") {
    if (peso >= 3 && peso <= 4) {
      quantidadeRecomendada = "40 g a 55 g";
    } else if (peso > 4 && peso <= 6) {
      quantidadeRecomendada = "55 g a 75 g";
    }
  } else if (idade === "idoso") {
    if (peso >= 3 && peso <= 4) {
      quantidadeRecomendada = "45 g a 60 g";
    } else if (peso > 4 && peso <= 6) {
      quantidadeRecomendada = "60 g a 75 g";
    }
  }

  if (quantidadeRecomendada !== "") {
    resultado.textContent = "Quantidade recomendada de ração por dia: " + quantidadeRecomendada;
  } else {
    resultado.textContent = "Por favor, insira um peso válido e selecione uma etapa de vida.";
  }
});
  