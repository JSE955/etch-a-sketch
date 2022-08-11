const container = document.querySelector('.container');
const squaresButton = document.querySelector('.squares');
let numberOfSquares;
let rowsToRemove;
let cells;

// Create the 16x16 grid.
createGrid(16);
cellTrail();

// Create the pixelated trail through grid when mousing over.
function cellTrail() {
    cells = document.querySelectorAll('div.cell');
cells.forEach((cell) => {
    cell.addEventListener('mouseover', () => {
        cell.classList.add('hover');
    });
});
}

cells = document.querySelectorAll('div.cell');
cells.forEach((cell) => {
    cell.addEventListener('mouseover', () => {
        cell.classList.add('hover');
    });
});

function removeRows() {
    rowsToRemove = document.querySelectorAll('.row');
    rowsToRemove.forEach((row) => {
        container.removeChild(row);
    });
};

function createGrid(numSquares) {
    for (let i = 1; i <= numSquares; i++) {
        let row = document.createElement('div');
        row.classList.add('row');
    
        for (let j = 1; j <= numSquares; j++) {
            let cell = document.createElement('div');
            cell.classList.add('cell');
            row.appendChild(cell);
        }
        container.appendChild(row);
    }
}

squaresButton.addEventListener('click', () => {
    numberOfSquares = parseInt(prompt('Enter number of squares per side for grid'));
    removeRows();
    createGrid(numberOfSquares);
    cellTrail();
})