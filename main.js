//Parametros para chamada

const planilha =
  "https://sheets.googleapis.com/v4/spreadsheets/1wDmWTleqsPr1yoLYY68A8NfDVUOwTdEaA-RuloiC7oU";
const apiKey = ""; //informe aqui sua Google API Key
const tabela = document.querySelector("#resultado");
const corpo = document.createElement("tbody");
const baseURL =
  planilha +
  "/values/pagina1!A2%3AD4?valueRenderOption=FORMATTED_VALUE&key=" +
  apiKey;

// com os dados do JSON cria a tabela

const manipulaTabela = data => {
  for (value of data.values) {
    let linha = document.createElement("tr");
    for (cell of value) {
      let coluna = document.createElement("td");
      coluna.innerText = cell;
      linha.appendChild(coluna);
    }
    corpo.appendChild(linha);
  }
  tabela.appendChild(corpo);
};

// realiza a chamada para coletar os dados

fetch(baseURL)
  .then(response => {
    return response.json();
  })
  .then(data => {
    manipulaTabela(data);
  });
