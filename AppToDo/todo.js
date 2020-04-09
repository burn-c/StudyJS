var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var toDoList = [
  'Go to the market',
  'Buy a notebook',
  'Study'
];

function renderToDoList() {
  listElement.innerHTML = '';
  for ( todo of toDoList ) {
    var todoElement = document.createElement('li');
    var todoText = document.createTextNode(todo);

    todoElement.appendChild(todoText);
    listElement.appendChild(todoElement);
  }
}

renderToDoList();

function addTodo() {
  var todoText = inputElement.value;

  toDoList.push(todoText);
  inputElement.value = '';
  renderToDoList();
}

buttonElement.onclick = addTodo;
