function fazGet(url){
    let request = new XMLHttpRequest();
    request.open("GET", url, false);
    request.send();
    return request.responseText;
}

function criaToDo(todo){

    linha = document.createElement("tr");
    tdUserId = document.createElement("td");
    tdId = document.createElement("td");
    tdTitle = document.createElement("td");
    tdCompleted = document.createElement("td");

    tdUserId.innerHTML = todo.userId;
    tdId.innerHTML = todo.id;
    tdTitle.innerHTML = todo.title;
    tdCompleted.innerHTML = todo.completed;

    linha.appendChild(tdUserId);
    linha.appendChild(tdId);
    linha.appendChild(tdTitle);
    linha.appendChild(tdCompleted);

    return linha;
}

function main() {
    let data = fazGet("https://jsonplaceholder.typicode.com/todos");
    let todos = JSON.parse(data);
    let tabela = document.getElementById("tabelaTodos");
    let tbody = document.createElement("tbody");

    todos.forEach(element => {
        let linha = criaToDo(element);
        tbody.appendChild(linha);
    });
    tabela.appendChild(tbody);
}

main()