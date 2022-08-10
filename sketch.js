const container = document.querySelector('.container');
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