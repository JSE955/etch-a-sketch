const container = document.querySelector('.container');

// Create the 16x16 grid.
for (let i = 1; i <= 16; i++) {
    let row = document.createElement('div');
    row.classList.add('row');

    for (let j = 1; j <= 16; j++) {
        let cell = document.createElement('div');
        cell.classList.add('cell');
        row.appendChild(cell);
    }
    container.appendChild(row);
}

// Create the pixelated trail through grid when mousing over.
const cells = document.querySelectorAll('div.cell');
cells.forEach((cell) => {
    cell.addEventListener('mouseover', () => {
        cell.classList.add('hover');
    });
});