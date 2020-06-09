var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var btnElement = document.querySelector('#app button');


todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function render() {
    listElement.innerHTML = '';

    for (todo of todos) {
        var todoElement = document.createElement('li');
        var text = document.createTextNode(todo);

        var linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#')

        var linkText = document.createTextNode(' Remove');
        linkElement.appendChild(linkText);

        var pos = todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'remove(' + pos + ')');
        
        todoElement.appendChild(text);
        todoElement.appendChild(linkElement);

        listElement.appendChild(todoElement);
    }
}

render();

function addNew() {
    var text = inputElement.value;

    todos.push(text);
    inputElement.value = '';

    render();
    saveStorage();
}

btnElement.onclick = addNew;

function remove(pos) {
    todos.splice(pos, 1);

    render();
    saveStorage();
}

function saveStorage() {
    localStorage.setItem('list_todos', JSON.stringify(todos))
}