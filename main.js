//variable for game board
let gameBoard;

//function makes array of boxes on the game board (3x3=9 boxes)
function startGame() {
    gameBoard = ['', '', '', '', '', '', '', '', '',];
    makeMove();
};
startGame();

function makeMove() {
    gameBoard.forEach(function(move, index){
        console.log(move, index);
    });
};

const boxes = Array.from(document.querySelectorAll('#board div'));
console.log(boxes)