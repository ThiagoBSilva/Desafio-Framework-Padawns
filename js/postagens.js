function fazGet(url){
    let request = new XMLHttpRequest();
    request.open("GET", url, false);
    request.send();
    return request.responseText;
}

function criaPostagem(postagem){
    
    linha = document.createElement("tr");
    tdUserId = document.createElement("td");
    tdId = document.createElement("td");
    tdTitle = document.createElement("td");
    tdBody = document.createElement("td");

    tdUserId.innerHTML = postagem.userId;
    tdId.innerHTML = postagem.id;
    tdTitle.innerHTML = postagem.title;
    tdBody.innerHTML = postagem.body;

    linha.appendChild(tdUserId);
    linha.appendChild(tdId);
    linha.appendChild(tdTitle);
    linha.appendChild(tdBody);

    return linha;
}

function main() {
    let data = fazGet("https://jsonplaceholder.typicode.com/posts");
    let postagens = JSON.parse(data);
    let tabela = document.getElementById("tabelaPostagens");
    let tbody = document.createElement("tbody");

    postagens.forEach(element => {
        let linha = criaPostagem(element);
        tbody.appendChild(linha);
    });
    tabela.appendChild(tbody)
}

main()