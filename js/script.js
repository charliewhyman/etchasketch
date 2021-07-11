//define the grid columns and rows
columns = 16;
rows = 16;

//select the container div
const container = document.querySelector("#container");
container.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;

//create a function to create the grid
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

//add event listeners to all squareDiv elements

allDivs = document.querySelectorAll('.squareDiv');

// we use the .forEach method to iterate through each button
allDivs.forEach((div) => {

  // and for each one we add a 'click' listener
  div.addEventListener('mouseover', () => {
      div.style.backgroundColor = 'blue';
  });
});








