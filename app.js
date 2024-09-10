function pesquisar() {
    // Seleciona o elemento HTML com o ID "resultados-pesquisa"
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if(campoPesquisa==("")){
      section.innerHTML = "Nada foi encontrado" 
      return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let disco = "";
    // Itera sobre cada item (banda) do array 'dados'
    for (let dado of dados) {
      titulo = dado.titulo.toLowerCase()
      disco = dado.disco.toLowerCase()
      if (titulo.includes(campoPesquisa) || disco.includes(campoPesquisa)){
        resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.disco}</p>
          <a href=${dado.link}>Mais informações</a>
        </div>
      `;
      }
    }
    if (!resultados){
      section.innerHTML="Nenhuma banda com esse nome foi encontrado"
      return
    }
    section.innerHTML = resultados
  }