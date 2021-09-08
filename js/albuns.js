function fazGet(url){
    let request = new XMLHttpRequest();
    request.open("GET", url, false);
    request.send();
    return request.responseText;
}

function criaAlbum(album){

    linha = document.createElement("tr");
    tdUserId = document.createElement("td");
    tdId = document.createElement("td");
    tdTitle = document.createElement("td");

    tdUserId.innerHTML = album.userId;
    tdId.innerHTML = album.id;
    tdTitle.innerHTML = album.title;

    linha.appendChild(tdUserId);
    linha.appendChild(tdId);
    linha.appendChild(tdTitle);
     
    return linha;
}

function main() {
    let data = fazGet("https://jsonplaceholder.typicode.com/albums");
    let albuns = JSON.parse(data);
    let tabela = document.getElementById("tabelaAlbuns");
    let tbody = document.createElement("tbody")

    albuns.forEach(element => {
        let linha = criaAlbum(element);
        tbody.appendChild(linha);
    });
    tabela.appendChild(tbody);
}

main();