//define the grid columns and rows
columns = 16;
rows = 16;

//select the container div
const container = document.querySelector("#container");
container.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;

function createGrid(columns, rows) {
    for (let i=0; i< columns * rows; i++) {
        const squareDiv = document.createElement("div");
        let id = i+1;
        squareDiv.id = 'box' + id;
        squareDiv.className = 'squareDiv';
        squareDiv.textContent = id;
        container.appendChild(squareDiv);    
    }
}

createGrid(columns, rows)



