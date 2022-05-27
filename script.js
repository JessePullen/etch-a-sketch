const gridContainer = document.querySelector('.grid-container');
const reset = document.querySelector('.reset');
const changeSize = document.querySelector('.change-size');
const gradient = document.querySelector('.gradient');
const random = document.querySelector('.random');
gradient.classList.add('active');

let gridRows = '';
let gridCount = 0;
let gridWidth = 16;
let drawType = 'gradient';

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

//Adds event listener to all grid items created. Changes grid item to a random colour or gradient.
function drawOnGrid() {
    const gridItems = document.querySelectorAll('.grid-item');

    gridItems.forEach((gridItem) => {
        gridItem.addEventListener('mouseover', () => {
            let opacity = gridItem.style.opacity;
            if (opacity == '') {
                opacity = 0.2;
            }

            if (drawType == 'gradient') {
                gridItem.style.backgroundColor = 'black';
                gridItem.style.opacity = parseFloat(opacity) + 0.2;
            } else {
                gridItem.style.opacity = 1;
                gridItem.style.backgroundColor = getRandomColour();
            }
        });
    });
}

//Randomly generates a number in hexadecimal and converts to string so it can be used as a CSS style colour.
function getRandomColour() {
    let maxHex = 0xFFFFFF;
    let randomNumber = Math.random() * maxHex;
    randomNumber = Math.floor(randomNumber);
    return randomColour = '#' + randomNumber.toString(16);
}

//Resets grid items to white
function resetGrid() {
    const gridItems = document.querySelectorAll('.grid-item');

    gridItems.forEach((gridItem) => {
        gridItem.style.backgroundColor = '';
        gridItem.style.opacity = '';
    });
}

//Repeatedly prompts user if number not in specified range or input is not a number.
function getWidth() {
    gridWidth = 0;

    while (gridWidth < 1 || gridWidth > 100 || isNaN(gridWidth)) {
        gridWidth = prompt('How many rows and columns do you want? (1 - 100)');
    }
}

//Switches class that highlights active draw mode.
function toggleClass() {
    if (drawType == 'random') {
        random.classList.add('active');
        gradient.classList.remove('active');
    } else if (drawType == 'gradient') {
        gradient.classList.add('active');
        random.classList.remove('active');
    }
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
    getWidth();
    removeGrid();
    runProgram();
});

gradient.addEventListener('click', () => {
    drawType = 'gradient';
    toggleClass()
});

random.addEventListener('click', () => {
    drawType = 'random';
    toggleClass()
});

runProgram();