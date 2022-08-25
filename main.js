const container = document.getElementById('container');
const square = document.getElementsByClassName('square');
const newGridBtn = document.getElementById('setupGrid');
newGridBtn.addEventListener('click', newGrid);

function newGrid() {
    let gridSize = prompt("How many squares per side would you like?");

    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`

    for (let i = 0; i < gridSize * gridSize; i++) {
        const square = document.createElement('div');
        square.className = 'square empty-square';
        square.addEventListener('mouseover', changeColor);
        square.addEventListener('mouseout', changeColor);
        container.appendChild(square);
    }
}

function changeColor(e) {
    if (e.type === 'mouseover') {
        e.target.style.backgroundColor = 'grey';
    } else if (e.type === 'mouseout') {
        e.target.style.backgroundColor = 'black';
    }
}
