const gridContainer = document.querySelector('.grid-container');

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

//Adds event listener to all grid items created. Uses class applied in createGrid.
function drawOnGrid() {
    const gridItems = document.querySelectorAll('.grid-item');

    gridItems.forEach((gridItem) => {
        gridItem.addEventListener('mouseover', () => {
            gridItem.style.backgroundColor = 'black';
        });
    });
}

createGrid();
drawOnGrid();