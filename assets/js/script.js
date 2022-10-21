/**
 * Declare constants for DOM elements
 * and possible choices.
 */
 const buttons = document.getElementsByClassName("control");
 const playerImage = document.getElementById('player-image');
 const computerImage = document.getElementById('computer-image');
 const resetButton =  document.getElementById('reset');
 const winnerText =  document.getElementById('result');
 let computerScore = 0;
 let playerScore = 0;
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
 resetButton.addEventListener('click', function(){
    window.location.href='/';
 })
 
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
    playerChoice = parseInt(playerChoice);
    checkWinner(computerChoice, playerChoice);
    updateScores();

}
 
 /**
  * Checks to see who the winner is, it accepts two strings as
  */
 function checkWinner(computerChoice, playerChoice){
     console.log(`User played ${playerChoice} vs Computer played ${computerChoice}`);

    // User plays Rock
    if (playerChoice === 0){
        // Pc plays rock
        if (computerChoice === 0){
            computerScore = computerScore + 1;
            playerScore = playerScore + 1;
            winnerText.innerHTML= "Tie !";
        }
        // PC plays paper
        if (computerChoice === 1){
            computerScore = computerScore + 1;
            winnerText.innerHTML= "Computer wins !";
        }
         // PC plays scissor
         if (computerChoice === 2){
            playerScore = playerScore + 1;
            winnerText.innerHTML= "Player wins !";
        }
    }    

    // User plays Paper
    if (playerChoice === 1){
        // Pc plays paper
        if (computerChoice === 1){
            computerScore = computerScore + 1;
            playerScore = playerScore + 1;
            winnerText.innerHTML= "Tie !";
        }
        // PC plays Scissors
        if (computerChoice === 3){
            computerScore = computerScore + 1;
            winnerText.innerHTML= "Computer wins !";
        }

         // PC plays Rock
         if (computerChoice === 0){
            playerScore = playerScore + 1;
            winnerText.innerHTML= "Player wins !";
        }
    }

    // User plays Scissors
    if (playerChoice === 3){
        // Pc plays scissors
        if (computerChoice === 3){
            computerScore = computerScore + 1;
            playerScore = playerScore + 1;
            winnerText.innerHTML= "Tie !";
        }
        // PC plays Rock
        if (computerChoice === 0){
            computerScore = computerScore + 1;
            winnerText.innerHTML= "Computer wins !";
        }
         // PC plays Paper
         if (computerChoice === 1){
            playerScore = playerScore + 1;
            winnerText.innerHTML= "Player wins !";
        }
    }

 }

 function updateScores() {
    document.getElementById('computer-score').innerText = computerScore;
    document.getElementById('player-score').innerText = playerScore;
 }
