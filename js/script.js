//define a function to clear the grid
function clearGrid() {
    let gridSize = prompt("Enter grid size");
    let setColumns = gridSize;
    let setRows = gridSize;
    createGrid(setColumns, setRows);
}

clearGrid();

//create a function to create the grid
function createGrid(columns, rows) {

    //select the container div
    const container = document.querySelector(".container");
    container.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    for (let i=0; i< columns * rows; i++) {
        const squareDiv = document.createElement("div");
        let id = i+1;
        squareDiv.id = 'box' + id;
        squareDiv.className = 'squareDiv';
        squareDiv.textContent = '';
        container.appendChild(squareDiv);
        
        var x = document.getElementsByClassName("squareDiv");
        var j; 
            for(j=0;j<x.length;j++) {
            x[j].style.backgroundColor = 'white'; 
            }
    }
}

//add event listeners to all squareDiv elements
allDivs = document.querySelectorAll('.squareDiv');

// we use the .forEach method to iterate through each button
allDivs.forEach((div) => {

  // and for each one we add a 'click' listener
  div.addEventListener('mouseover', () => {
      div.style.backgroundColor = 'coral';
  });
});








