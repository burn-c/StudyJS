function addName() {
  var inputElement = document.querySelector('input[name=name]');
  var btnAdd = document.querySelector('.btnAdd');

  btnAdd.onclick = function() {
    let nameText = inputElement.value;

    addLine(nameText);
    inputElement.value = ('');

  }
}
