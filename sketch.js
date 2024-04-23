const container = document.querySelector(".container");
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
        cell.style.backgroundColor = "black";
    })
}