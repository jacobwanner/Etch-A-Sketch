const container = document.getElementById('container');
for (let x=0; x<256; x++) {
    const square = document.createElement('div');
    square.className = 'square empty-square';
    square.addEventListener('mouseover', changeColor);
    square.addEventListener('mouseout', changeColor);
    container.appendChild(square);
}

const square = document.getElementsByClassName('square');

function changeColor(e) {
    if (e.type === 'mouseover') {
        e.target.style.backgroundColor = 'grey';
    } else if (e.type === 'mouseout') {
        e.target.style.backgroundColor = 'black';
    }
}
