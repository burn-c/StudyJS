function addSquare() {
    var squareGreen = document.createElement('div');
    var containerElement = document.querySelector('#app');

    squareGreen.style.width = '100px';
    squareGreen.style.height = '100px';
    squareGreen.style.backgroundColor = 'red';
    squareGreen.onmouseover = function() {

      var newColor = getRandomColor()

      squareGreen.style.backgroundColor = newColor;

    }

    containerElement.appendChild(squareGreen);
}
