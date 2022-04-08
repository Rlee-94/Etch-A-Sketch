
//Creating dynamic board size
function createBoard(boardSize) {
let board = document.querySelector('.board');
let squares = board.querySelectorAll('div');
squares.forEach((div) => div.remove());
board.style.gridTemplateColumns = `repeat(${boardSize}, 1fr)`;
board.style.gridTemplateRows = `repeat(${boardSize}, 1fr)`;

let amount = boardSize * boardSize

for (let i =0; i<amount; i++) {
    let square = document.createElement('div');
    square.style.backgroundColor = 'blue';
    board.insertAdjacentElement("beforeend", square);
  }
}

createBoard(16);

function changeSize(input) {
    if(input >=2 && input <=100){
        createBoard(input);
    } else {
        console.log('ERROR: Value must be between 2 and 100')
    }
    
}