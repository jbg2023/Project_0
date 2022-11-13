//variable for game board
let gameBoard;
let turn = 'X';

//determine a winner
let winGame;
const threeInRow = [
    [0, 1, 2],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];


function winning() {
    let winner = null;
    threeInRow.forEach(function(a, b){
        if (gameBoard[a[0]] && gameBoard[a[0]] === gameBoard[a[1]]
            && gameBoard[a[0]] === gameBoard[a[2]]) winner = gameBoard[a[0]];
            return winner;
    });
        if (winner) {
            return winner
        } else if (gameBoard.includes('')) {
            return null
        } else {
            return 'Tie'
        }
};



//event listeners
document.getElementById('board').addEventListener('click', takeTurn);

//uses findIndex to match index of array to square clicked
function takeTurn() {
    let i = boxes.findIndex(function(box) {
        return box === event.target;
    });
    gameBoard[i] = turn;
    if (turn === 'X') {
        turn = 'O'
        } else {
        turn = 'X'
        };
    winGame = winning();
    makeMove();
};

//function makes array of boxes on the game board (3x3=9 boxes)
function startGame() {
    gameBoard = ['', '', '', '', '', '', '', '', '',];
    makeMove();
    sessionStorage.xScore;
    sessionStorage.oScore;
};

function makeMove() {
    gameBoard.forEach(function(move, index){
        boxes[index].textContent = move;
    });
    if (winGame === 'Tie') {
        whosTurn.textContent = `It's a tie!`;
        tieAlert();
    } else if (winGame) {
        whosTurn.textContent = `${winGame} wins!`;
        keepScore();
        winAlert();
    } else {
        whosTurn.textContent = `Your turn, ${turn}!`
    };
};

function keepScore() {
    let xScore;
    let oScore;
    let newXScore = 0;
    let newOScore = 0;
    if (winGame === 'X') {
        sessionStorage.xScore = Number(sessionStorage.xScore) + 1;
        newXScore = sessionStorage.xScore;
        
    } else if (winGame === 'O') {
        sessionStorage.oScore = Number(sessionStorage.oScore) + 1;
        newOScore = sessionStorage.oScore;

    }
     console.log(newXScore);
     console.log(newOScore);
}

let timeout;
function winAlert() {
    timeout = setTimeout(winAlert, 100);
    function winAlert() {
        alert(`${winGame} wins!`);
        window.location.reload();
    }
}

function tieAlert() {
    timeout = setTimeout(tieAlert, 100);
    function tieAlert() {
        alert(`It's a tie!`);
        window.location.reload();
    }
}


//restart
document.getElementById('restart').addEventListener('click', startGame);

const boxes = Array.from(document.querySelectorAll('#board div'));
const whosTurn = document.querySelector('h2');
startGame();