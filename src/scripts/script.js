document.addEventListener("DOMContentLoaded", function() {
    var dropdown = document.querySelector(".dropdown");
    var dropdownContent = document.querySelector(".dropdown-content");
  
    dropdown.addEventListener("click", function() {
      dropdown.classList.toggle("open");
    });
  });
  