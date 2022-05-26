const gridContainer = document.querySelector('.grid-container');
const reset = document.querySelector('.reset')
const changeSize = document.querySelector('.change-size')

let gridRows = '';
let gridCount = 0;
let gridWidth = 16;

//Function that creates dynamic grid to specified row x col.
//Creates unique element with class and adjusts 'grid-template-columns' CSS by width of grid.
function createGrid() {
    for (let i = 0; i < gridWidth; i++) {
        gridRows += ' auto';
        gridContainer.style.gridTemplateColumns = gridRows;

        for (let j = 0; j < gridWidth; j++) {
            gridCount++
            const gridItem = document.createElement('div');
            gridItem.classList.add('grid-item-' + gridCount);
            gridItem.classList.add('grid-item');
            gridItem.textContent = gridCount;
            gridContainer.appendChild(gridItem);
        }    
    }
}

//Resets grid variables for a clean new grid. Removes all grid items.
function removeGrid() {
    gridCount = 0;
    gridRows = '';
    const gridItems = document.querySelectorAll('.grid-item');

    gridItems.forEach((gridItem) => {
        gridContainer.removeChild(gridItem);
    });
}

//Adds event listener to all grid items created. Uses class applied in createGrid.
function drawOnGrid() {
    const gridItems = document.querySelectorAll('.grid-item');

    gridItems.forEach((gridItem) => {
        gridItem.addEventListener('mouseover', () => {
            gridItem.style.backgroundColor = 'black';
        });
    });
}

//Resets grid items to white
function resetGrid() {
    const gridItems = document.querySelectorAll('.grid-item');
    
    gridItems.forEach((gridItem) => {
        gridItem.style.backgroundColor = 'white';
    });
}

//Initial grid creation and ability to draw on the grid.
function runProgram() {
    createGrid();
    drawOnGrid();
}

reset.addEventListener('click', () => {
    resetGrid();
});

//Takes input for size of new grid, clears grid and creates new grid.
changeSize.addEventListener('click', () => {
    gridWidth = prompt('How many rows and columns do you want?');
    removeGrid();
    runProgram();
});

runProgram();