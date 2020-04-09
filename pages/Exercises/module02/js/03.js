var names = ["Diego", "Gabriel", "Lucas"];


function addNames(names) {

  names.map( name => (addLine(name))

    )
}

function addLine(name) {
  var newLine = document.createElement('li');
  var containerElement = document.querySelector('.listName');

  newLine.innerText = name;

  containerElement.appendChild(newLine);

}


