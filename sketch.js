const container = document.querySelector(".container");
const editButton = document.querySelector(".editButton");
editButton.addEventListener("click", () => {
    let dimension = parseInt(prompt("Enter the number of squares per side for grid"));
    
    // Remove elements from current container
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
    
    createGrid(dimension);
})

createGrid(16);

function createGrid(squaresPerSide) {
    for (let i = 0; i < squaresPerSide; i++) {
        const row = document.createElement("div");
        row.classList.toggle("row");
        for (let j = 0; j < squaresPerSide; j++) {
            const cell = document.createElement("div");
            cell.classList.toggle("cell");
            addHoverEventListener(cell);
            row.appendChild(cell);
        }
        container.appendChild(row);
    }
}

function addHoverEventListener(cell) {
    cell.addEventListener("mouseover", () => {
        cell.style.backgroundColor = `rgb(${generateRGBValue()}, ${generateRGBValue()}, ${generateRGBValue()})`;
    })
}

function generateRGBValue() {
    return Math.floor(Math.random() * 255);
}