const container = document.getElementById('container');
for (let x=0; x<9; x++) {
    const square = document.createElement('div');
    square.className = 'square';
    container.appendChild(square);
}

const squareDiv = document.getElementById('square');
squareDiv.onmouseover = function() {
    this.style.backgroundColor = 'grey';
};
squareDiv.onmouseout = function () {
    this.style.backgroundColor = 'black';
};
