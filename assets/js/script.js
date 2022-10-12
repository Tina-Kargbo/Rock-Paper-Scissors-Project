/**
 * Declare constants for DOM elements
 * and possible choices.
 */
const buttons = document.getElementsByClassName("control");
const buttons = document.getElementsById("player-score");
const buttons = document.getElementsById("computer-score");
const buttons = document.getElementsById("player-image");
const buttons = document.getElementsById("computer-image");
const buttons = document.getElementsById("messages");
const buttons = document.getElementsById["rock", "paper", "scissors"]; 

/** 
 * Add event listener to all the buttons
 */

for (let button of buttons) {
    button.addEventListener("click", function () {
        let playerChoice = this.getAttribute("data-choice");
        playGame(playerChoice);
    });
}