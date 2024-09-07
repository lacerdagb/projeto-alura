function pesquisar() {
  // Obtém a seção onde os resultados da pesquisa serão exibidos
  let section = document.getElementById("resultados-pesquisa");
  console.log(section); // Verifica se a seção foi encontrada no DOM

  let campoPesquisa = document.getElementById("campo-pesquisa").value
  if (campoPesquisa == "") {
    section.innerHTML = "<p style='color: white;'>Digite um curso, tente: android, sql, software...</p"
    return
  }

  // Inicializa uma string vazia para armazenar os resultados formatados
  let resultados = "";
  let titulo = "";
  let descricao = "";
  let tags = "";

  campoPesquisa = campoPesquisa.toLowerCase()

  // Itera sobre cada dado na lista de dados
  for (let dado of dados) {
    titulo = dado.titulo.toLocaleLowerCase()
    descricao = dado.descricao.toLocaleLowerCase()
    tags = dado.tags.toLocaleLowerCase()
    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
      
      resultados += `
      <div class="item-resultado">
        <h2>
          <a href="#" target="_blank">${dado.titulo}</a> </h2>
        <p class="descricao-meta">
          ${dado.descricao} </p>
        <a href=${dado.link} target="_blank">Mais informações</a> </div>
    `;
    }
    //console.log(dado.titulo.includes(campoPesquisa)) ele varre e vÊ se a palavra ta dentro
    // Concatena o HTML para cada item da pesquisa, utilizando template literals (``) para facilitar a inserção de variáveis
    
  }
  if (!resultados) {
    resultados = "<p style='color: white;'>Nenhum curso relacionado, tente: ios, excel, automacao </p>"
}

  // Atribui o HTML gerado para o conteúdo da seção
  section.innerHTML = resultados;
}
// console.log(dados); // Verifica o conteúdo da lista de dados (esperado: um array)