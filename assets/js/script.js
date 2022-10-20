/**
 * Declare constants for DOM elements
 * and possible choices.
 */
const buttons = document.getElementsByClassName("control");
const playerImage = document.getElementById('player-image');
const computerImage = document.getElementById('computer-image');
let computerScore = 0;
// const buttons = document.getElementsById("player-score");
// const buttons = document.getElementsById("computer-score");
// const buttons = document.getElementsById("player-image");
// const buttons = document.getElementsById("computer-image");
// const buttons = document.getElementsById("messages");
// const buttons = document.getElementsById["rock", "paper", "scissors"]; 

/** 
 * Add event listener to all the buttons
 */

for (let button of buttons) {
    button.addEventListener("click", function () {
        let playerChoice = this.getAttribute("data-choice");
        playGame(playerChoice);
    });
}

/**
 * The main game function. Accepts one parameter, 
 * which is the data-choice value of the selected button.
 */
function playGame(playerChoice) {

    playerImage.src = `assets/images/${playerChoice}.jpg`;
    playerImage.alt = playerChoice;

    let computerChoice = Math.floor(Math.random() * 3);

    computerImage.src = `assets/images/${computerChoice}.jpg`;
    computerImage.alt = computerChoice;

    let result = checkWinner(computerChoice, playerChoice);

//     updateScores(result);
}

/**
 * Checks to see who the winner is, it accepts two strings as
 */
function checkWinner(computerChoice, playerChoice){
    console.log(`User played ${playerChoice} vs Computer played ${computerChoice}`);
    computerScore = computerScore + 1;
    document.getElementById('computer-score').innerText = computerScore;
}