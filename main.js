const board = document.getElementById('game-board');
const boxes = document.getElementsByClassName('box');
const message = document.getElementById('message');
const winMsg = document.getElementById('win-message');
let turn = 'player';

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

for (let i = 0; i < boxes.length; i++){
    boxes[i].addEventListener('click', renderMark);
}

const showWinner = (winner) => {
    winMsg.textContent = `The winner is ${winner}!`;
}

function checkWin(){
    let win = false;
    for (pattern of winPatterns){
        let val1 = boxes[pattern[0]].innerHTML;
        let val2 = boxes[pattern[1]].innerHTML;
        let val3 = boxes[pattern[2]].innerHTML;

        if (val1 !== '' && val2 !== '' && val3 !== '' && val1 === val2 && val2 === val3){
            showWinner(val1);
            win = true;
            winMsg.classList.remove('hidden');
            winMsg.classList.add('show');
            return;
        }
    }
    if (!win){
        const all = [...boxes].every((box) => box.innerHTML !== '');
        if (all){
            winMsg.textContent = `It is a draw!`;
            winMsg.classList.remove('hidden');
            winMsg.classList.add('show');
        }
    }
}

function renderMark() {
    if (turn === 'player' && this.innerHTML === ''){
        this.innerHTML = 'X';
        turn = 'computer';
        checkWin();
    }
    else if (turn === 'computer' && this.innerHTML === '') {
        this.innerHTML = 'O';
        turn = 'player';
        checkWin();
    }
}

function reset(){
    for (box of boxes){
        box.innerHTML = '';
    }
    winMsg.classList.remove('show');
    winMsg.classList.add('hidden');
}