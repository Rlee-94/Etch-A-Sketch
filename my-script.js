let color = 'black';
let click = true
//Creating dynamic board size
function createBoard(boardSize) {
let board = document.querySelector('.board');
let squares = board.querySelectorAll('div');
squares.forEach((div) => div.remove());
board.style.gridTemplateColumns = `repeat(${boardSize}, 1fr)`;
board.style.gridTemplateRows = `repeat(${boardSize}, 1fr)`;

let amount = boardSize * boardSize


for (let i = 0; i < amount; i++) {
    let square = document.createElement('div');
    square.addEventListener('mouseover', colorSquare)
    square.style.backgroundColor = 'white';
    board.insertAdjacentElement("beforeend", square);
  }
}

createBoard(16);

//Change board size based on user input
function changeSize(input) {
    if(input >= 2 && input <= 100){
        createBoard(input);
    } else {
        console.log('ERROR: Value must be between 2 and 100')
    }
    
}

function colorSquare() {
    if (click) {
        if (color === 'random') {
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%`;
        } else {
            this.style.backgroundColor = color;
        }
    }
}

function changeColor(choice) {
    color = choice;
}

function resetBoard() {
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.style.backgroundColor = 'white');
}

//Click toggles the mouse color on/off
document.querySelector('body').addEventListener('click', (e) => {
    if(e.target.tagName != 'BUTTON') {
        click = !click;
        if (click) {
            document.querySelector('.mode').textContent = "Mode: Coloring"
        } else {
            document.querySelector('.mode').textContent = "Mode: Not Coloring"
        }
    }
});