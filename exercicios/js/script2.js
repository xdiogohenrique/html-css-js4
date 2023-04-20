window.onload = function(){
  tabela();
}

function tabela(){
  let tabela = document.getElementById("mytable");
  let linhas = prompt("quantas linhas ?:")
  let colunas =  prompt("quantas colunas ?:")
  let html = "";

  for (let iTr = 1; iTr <= linhas; iTr++) {
    html += "<tr>";
      for (let iTd = 1; iTd <= colunas; iTd++) {
        html += `<td style="background-color: ${cor(iTd)}">${iTr}, ${iTd}</td>`;
      }
      html += "</tr>";
  }

  tabela.innerHTML = html;
}

function cor(numero){
  let cores = numero % 2 == 0 ? 'green' : 'yellow';
  return cores;
}