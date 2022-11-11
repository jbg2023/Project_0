//variable for game board
let gameBoard;
let turn = 'X';

//event listeners
document.getElementById('board').addEventListener('click', takeTurn);

function takeTurn(boxClick) {
    let i = boxes.findIndex(function(box) {
        return box === boxClick.targetBox;
    });
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
startGame();