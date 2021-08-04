//define a function to get a user input for grid size, then generate a new grid
function clearGrid() {
    do{
        var gridSize = parseInt(window.prompt('Please enter a number from 1 to 100', ''), 16);
    }while(isNaN(gridSize) || gridSize > 100 || gridSize < 1);
    let setColumns = gridSize;
    let setRows = gridSize;
    createGrid(setColumns, setRows);
}

clearGrid();

//create a function to create the grid
function createGrid(columns, rows) {

    //select the container div
    const container = document.querySelector('.container');
    container.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    for (let i=0; i< columns * rows; i++) {
        const squareDiv = document.createElement('div');
        let id = i+1;
        squareDiv.id = 'box' + id;
        squareDiv.className = 'squareDiv';
        squareDiv.textContent = '';
        container.appendChild(squareDiv);
        
        //reset the grid color when creating a new grid
        var x = document.getElementsByClassName('squareDiv');
        var j; 
            for(j=0;j<x.length;j++) {
            x[j].style.backgroundColor = 'white'; 
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
}










