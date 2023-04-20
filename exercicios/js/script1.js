window.onload = function(){
    adicionainfo();
}

function adicionainfo(){
    let tabela = document.getElementById("mytable");
    let indice = 0;
    let nome = "";
    do {
        nome = prompt("Escreva o nome: ");
        if(nome != null){
            indice++;
            let linha = document.createElement("tr");

            linha.innerHTML = `
            <td>${indice}</td>
            <td>${nome}</td>
            `;

            tabela.appendChild(linha);
        }
    }
    while (nome != null);
}