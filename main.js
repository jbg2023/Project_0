let gameBoard;
let turn = 'X';
let timeout;
let winGame;
const boxes = Array.from(document.querySelectorAll('#board div'));
const whosTurn = document.querySelector('h2');
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

document.getElementById('restart').addEventListener('click', startGame);
document.getElementById('board').addEventListener('click', takeTurn);

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

function takeTurn() {
    let i = boxes.findIndex(function(box) {
        return box === event.target;
    }); 
    gameBoard[i] = turn;
    if (turn === 'X') {
        turn = 'O';
        } else {
        turn = 'X'
        }; 
    winGame = winning();
    makeMove();  
};

function startGame() {
    gameBoard = ['', '', '', '', '', '', '', '', '',];
    makeMove();
    
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
        winAlert();
        keepScore(); 
    } else {
        whosTurn.textContent = `Your turn, ${turn}!`;
    }; 
    
};

// let oScore = parseInt(sessionStorage.getItem('oScore'));
// let xScore = parseInt(sessionStorage.getItem('xScore'));
// function keepScore() {
//     if (whosTurn.textContent === 'X wins!') {
//         let xScore;
//         sessionStorage.setItem('xScore', ++xScore);
//     } else {
//         let oScore;
//         sessionStorage.setItem('oScore', ++oScore);
//     } 
// }  
// console.log(oScore)
// console.log(xScore)

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

startGame();