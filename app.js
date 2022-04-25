const scoreToPlayerOne = document.querySelector('.playerOne');
const scoreToPlayerTwo = document.querySelector('.playerTwo');
const resetScore = document.querySelector('.resetBtn');
const playerOneScore = document.querySelector('#playerOneScore');
const playerTwoScore = document.querySelector('#playerTwoScore');
const winningScore = document.querySelector('select');

let isDisable = false;
let startScore = 1;
function addColor(p1,p2) {
    p1.classList.add('win');
    p2.classList.add('lost');
}
scoreToPlayerOne.addEventListener('click',function() {
        if(!isDisable) {
            playerOneScore.innerText = startScore;
            if(parseInt(playerOneScore.innerText) !== parseInt(winningScore.value)){
                startScore++;
            }
            else {
                addColor(playerOneScore,playerTwoScore);
                isDisable = true;
            }
        }
})

let startScore2 = 1;
scoreToPlayerTwo.addEventListener('click',function() {
    if(!isDisable) {
        playerTwoScore.innerText = startScore2;
        if(parseInt(playerTwoScore.innerText) !== parseInt(winningScore.value)){
             startScore2++;
        }
        else{
            addColor(playerTwoScore,playerOneScore);
            isDisable = true;
        }
    }
})

function reset() {
    playerOneScore.textContent = 0;
    playerTwoScore.textContent = 0;
    startScore = 1;
    startScore2 = 1;
    playerOneScore.classList.remove('win','lost');
    playerTwoScore.classList.remove('win','lost');
    isDisable = false;
}
resetScore.addEventListener('click',reset);
winningScore.addEventListener('change',reset);