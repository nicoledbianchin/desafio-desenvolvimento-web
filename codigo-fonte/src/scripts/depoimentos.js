let inputName = document.getElementById("input-name")
let txtArea = document.querySelector(".txtDepoimento")
let btnEnviar = document.getElementById("btn-enviar")
let depoimentos = document.querySelector(".depoimentos")

btnEnviar.addEventListener('click', () => {

    let nome = inputName.value;
    let texto = txtArea.value;
    
    if (nome == null || nome ==  '') {
      alert('Por favor informe seu nome para envio do formulário.')
      return false
    } else if (texto == null || texto == '') {
      alert('Por favor informe o seu depoimenot para envio do formulário.')
      return false
    }

    depoimentos.innerHTML += `<div class="depoimento">
                                <p class="depoimento-nome">${nome}</p>
                                <p class="depoimento-texto">${texto}</p>
                              </div>`
})

