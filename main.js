//variable for game board
let gameBoard;
let turn = 'X';

//event listeners
document.getElementById('board').addEventListener('click', takeTurn);

//uses findIndex to match index of array to square clicked
function takeTurn(boxClick) {
    let i = boxes.findIndex(function(box) {
        return box === boxClick.target;
    });
    gameBoard[i] = turn;
    if (turn === 'X') {
        turn = 'O'
        } else {
        turn = 'X'
        };
    makeMove();
};

//function makes array of boxes on the game board (3x3=9 boxes)
function startGame() {
    gameBoard = ['', '', '', '', '', '', '', '', '',];
    makeMove();
};


function makeMove() {
    gameBoard.forEach(function(move, index){
        boxes[index].textContent = move;
    });
};

const boxes = Array.from(document.querySelectorAll('#board div'));
const whosTurn = document.querySelector('h3');
startGame();